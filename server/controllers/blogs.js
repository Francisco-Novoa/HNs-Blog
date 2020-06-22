const blogRouter = require('express').Router()
const Blog = require('../models/blogs')
const { info, error } = require('../utils/logger')
const autoLoader = require('../utils/getBlogs')

blogRouter.get('/', async (request, response) => {
    //find all the blogs that have not been flagged as removed
    const blogs = await Blog.find({ removed: false })
    response.json(blogs.map(blog => blog.toJSON()))
})

blogRouter.get('/now', async (request, response) => {
    //find all the blogs that have not been flagged as removed
    const blogs = await autoLoader()
    info(`${blogs.insertedCount ? blogs.insertedCount : 'no new'} blogs were added to the DB`)
    response.status(200).json({ 'message': `${blogs.insertedCount ? blogs.insertedCount : 'no new'} blogs were added to the DB` })
})

blogRouter.delete('/:id', async (request, response) => {
    //flags a blog as removed
    const blog = await Blog.findById(request.params.id)
    blog.removed = true
    await blog.save((err, res) => {
        if (err) {
            error(err)
        }
        else {
            info(`blog '${res.title}' removed`)
            info('-----')
        }
    })
    response.status(200).end()
})


module.exports = blogRouter