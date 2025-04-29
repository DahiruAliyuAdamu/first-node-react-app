const Blog = require('../models/blog')

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('blogs/index', { title: 'All blogs', blogs: result})
        })
        .then(err => console.log(err))
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'create' })
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then(result => res.redirect('/'))
    .then(err => console.log(err))
}

const blog_details = (req, res) => {
    const blogId = req.params.id
    Blog.findById(blogId)
        .then(result => res.render('blogs/details', { title: 'Blog Details', blog: result }))
        .catch(err => console.log(err)) 
}

const blog_delete = (req, res) => {
    const blogId = req.params.id
    Blog.findByIdAndDelete(blogId)
        .then(result => res.json({ redirect: '/blogs' }))
        .catch(err => console.log(err))
}

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete
}