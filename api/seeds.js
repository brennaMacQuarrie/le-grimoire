const mongoose = require('mongoose');
const Post = require('./post-model');
const User = require('./user-model');
mongoose.connect('mongodb://localhost/fakebook');

user1 = new User({ name: "Ryan"});
user2 = new User({ name: "Jane"});

const posts = [
  {
    body: "The first person to suck in helium probably thought there voice was forever changed for a scary 20 seconds or so.",
    user: user1._id,
    comments: [{
      body: 'Great post!',
      user: user2._id
    }]
  },
  {
    body: "If you win a years worth of calendars, do you only win one calendar?",
    user: user2._id
  },
  {
    body: "It kinda makes sense that the target audience for fidget spinners lost interest in them so quickly",
    user: user1._id
  },
  {
    body: "Security at every level of an airport is absolutely ridiculous. Until you get to the baggage claim. Then it’s just like take whatever bag you want.",
    user: user2._id
  }
]

User.remove().then(() => {
  user1.save();
  user2.save();
})

Post.remove().then(() => {
  posts.forEach(postData => {
    const post = new Post(postData);
    post.save().then(() => console.log(`Saved ${post.body}`));
  })
})
