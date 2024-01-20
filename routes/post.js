const express = require('express');
const PostService = require('../services/post/postServices');
const { getAllPosts, insertPost, updatePost, getPostById, deletePostById } = require('../controller/posts/postController');
const insertValidation = require('../model/post/validationdto/postInsert');
const router = express.Router();



router.get('/',getAllPosts);
router.post('/',insertValidation,insertPost);
router.get('/:id',getPostById);
router.put('/:id',updatePost);
router.delete('/:id',deletePostById);





module.exports = router      
