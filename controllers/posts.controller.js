const { validationResult } = require('express-validator');

let posts = [];

const PostController = {
    getPosts: (req, res) => {
        res.json(posts)
    },
    addPost: (req, res) => {
        const { title, content } = req.body;
        posts.push({ title, content })
        res.json(posts)
    },
    updatePost: (req, res) => {
        posts = posts.map(post => {
            if (post.title === req.params.title) {
                post.title = req.body.title
                post.content = req.body.content
            }
            return post
        })
        res.json(posts)
    },
    deletePost: (req, res) => {
        posts = posts.filter(post => {
            return post.title !== req.params.title
        })
        res.json(posts)
    }
}

module.exports = PostController;