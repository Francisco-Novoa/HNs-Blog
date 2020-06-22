import axios from 'axios'


export async function deleteBlog(id) {
    const blogs = await axios.delete(`/api/blogs/${id}`)
    return blogs.status
}

const orderBlogs = (blogArray) => {
    return blogArray.sort((a, b) => {
        if (a.created_at_i < b.created_at_i) return 1
        if (a.created_at_i > b.created_at_i) return -1
        return 0
    })
}

export const wakeUp = async () => {
    const awaken = await axios.get('/api/blogs/now')
    console.log(awaken.data)
    return awaken.data
}

export async function getBlogs() {
    const blogs = await axios.get('/api/blogs/')
    console.log(blogs.data)
    return orderBlogs(blogs.data)
}

