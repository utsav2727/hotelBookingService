const { validationResult } = require("express-validator");
const PostService = require("../../services/post/postServices");

const postService = new PostService();

const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.get();
        res.status(200).json({
            status: 'success',
            posts,
        });
    } catch (error) {
        res.status(500).json({
            error: "internal server error"
        })
    }
}

const insertPost = async (req, res) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            })
        }

        const post = await postService.post(req.body);

        res.status(200).json({
            status: 'success',
            post,
        });
    } catch (error) {
        res.status(500).json({
            error: "internal server error"
        })
    }
}

const updatePost = async (req, res)=>{
    try {
        const post = await postService.update(req.params.id , req.body);

        res.status(200).json({
            status: 'success',
            post,
        });
    } catch (error) {
        res.status(500).json({
            error: "internal server error"
        })
    }
}

const getPostById = async (req, res)=>{
    try {
        const post = await postService.getById(req.params.id);

        res.status(200).json({
            status: 'success',
            post,
        });
    } catch (error) {
        res.status(500).json({
            error: "internal server error"
        })
    }
}

const deletePostById = async (req, res)=>{
    try {
        const post = await postService.delete(req.params.id);

        res.status(200).json({
            status: 'success',
            post,
        });
    } catch (error) {
        res.status(500).json({
            error: "internal server error"
        })
    }
}


module.exports = {
    getAllPosts,
    insertPost,
    updatePost,
    getPostById,
    deletePostById
}    