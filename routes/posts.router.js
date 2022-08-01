const {Router} = require("express")
const {body} = require('express-validator');
const {PostController} = require("../controllers")
const RequestValidation = require("../middlewares/request-validation.middleware")
const router = Router();

router.get('/', PostController.getPosts);
router.post('/', [
    body('title')
        .exists().withMessage("Title must be exists").bail()
        .isLength({min: 5}).withMessage('Title must be at least 5 characters long'),
    body('content')
        .exists().withMessage("Content must be exists").bail()
        .isLength({min: 10}).withMessage('Content must be at least 10 characters long')
], RequestValidation, PostController.addPost);
router.put('/:title', PostController.updatePost)
router.delete('/:title', PostController.deletePost)

module.exports = router;