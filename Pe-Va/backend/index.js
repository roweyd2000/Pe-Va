const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const cors = require("cors");

const app = express();


// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://row:roweyd2000@cluster0.1deydxx.mongodb.net/PE-VA', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error(err);
});


const UserSchema = new mongoose.Schema({
  UserName: String,
  Password: String,
  Age:Number

});

const  PostsSchema = new mongoose.Schema({
  UserName: String,
  Title: String,
  Description: String,
  Likes: Number
});




const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostsSchema);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));

app.currentUser = null;


app.post('/Post', (req, res) => {
  const post = new Post({
    UserName: app.currentUser.UserName,
    Title: req.body.Title,
    Description: req.body.Description,
    Likes: 0
  });

  post.save()
    .then(() => {
      res.status(201).send('Post added');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error adding Post');
    });
});

app.get('/Posts', (req, res) => {
    Post.find()
      .then((PostsList) => {
        res.status(200).json(PostsList);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error retrieving posts list');
      });
  });


  app.post('/User', (req, res) => {
    const user = new User({
      UserName: req.body.UserName,
      Password: req.body.Password,
      Age: req.body.Age
    });
  
    User.findOne({ UserName: req.body.UserName })
      .then((existingUser) => {
        if (existingUser) {
          res.status(400).send('User already exists');
        } else {
          user.save()
            .then(() => {
              res.status(201).send('User added');
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send('Error adding user');
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error checking for existing user');
      });
  });

  app.post('/login', (req, res) => {
    const { UserName, Password } = req.body;
  
    User.findOne({ UserName })
      .then((user) => {
        if (user && user.Password === Password) {
          app.currentUser = user;
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error logging in');
      });
  });
 

  



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
