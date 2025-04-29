const express = require('express')
const blog_controller = require('../controller/blogController')

const router = express.Router()

router.get('/', blog_controller.blog_index)

router.get('/create', blog_controller.blog_create_get)

router.post('/add', blog_controller.blog_create_post)

router.get('/:id', blog_controller.blog_details)

router.delete('/:id', blog_controller.blog_delete)

module.exports = router