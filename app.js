const express = require('express');
const postRoutes = require('./routes/post.js');





const app = express();

app.use(express.json());

app.use('/posts', postRoutes)





//Get All Posts
// app.get('/post' ,async (req, res) => {
//     const postService = new PostService();
//     const posts = await postService.findAll()
//     res.status(200).json({
//         status: 'success',
//         posts,
//       });
// });

// //Create Post
// app.post('/post',validation, async (req, res) => {
  
//     const errors = validationResult(req);
//     if(errors.em){
//         return res.status(422).json({
//             errors:errors.array()
//         })
//     }
  
//     const doc = postRepository.create(req.body);
//     const post = await postRepository.save(doc);

//     res.status(200).json({
//     status: 'success',
//     post,
//   });
// });

// //Update A Single Sost
// app.patch('/post/:id', async (req, res) => {
//   const post = await postRepository.update({ id: req.params.id }, req.body);

//   res.status(200).json({
//     status: 'success',
//     post,
//   });
// });

// //Get Back A Single Post
// app.get('/post/:id', async (req, res) => {
//   const post = await postRepository.findBy({ id: req.params.id });

//   res.status(200).json({
//     status: 'success',
//     post,
//   });
// });

// //Delete Single Post
// app.get('/post/:id', async (req, res) => {
//   const post = await postRepository.delete({ id: req.params.id });

//   res.status(200).json({
//     status: 'success',
//     post,
//   });
// });


module.exports = app;