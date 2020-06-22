const config = require('./config')
const axios = require('axios')
const { info } = require('./logger')
const Blog = require('../models/blogs')

const parseData = async blogs => {
    //receives raw query to the API and extracts the values i need
    return Object.values(blogs).reduce((accumulator, currentValue) => {
        const title = currentValue.story_title || currentValue.title
        const url = (currentValue.url || currentValue.story_url)
        const { author, story_id, created_at, created_at_i } = currentValue
        return [...accumulator, { title, url, author, story_id, created_at, created_at_i, removed: false }]
    }, [])
}

const orderBlogs = (blogArray) => {
    //orders blogs so blogs with equal ids are adjacent
    return blogArray.sort((a, b) => {
        if (parseInt(a.story_id) < parseInt(b.story_id)) return 1
        if (parseInt(a.story_id) > parseInt(b.story_id)) return -1
        return 0
    })
}

const normalizeBlogs = (data) => {
    //checks if all the fields are there
    return data.filter(({ title, url, author, story_id, created_at, created_at_i }) => {
        return title && author && url && story_id && created_at && created_at_i
    })
}

const normalizeData = data => {
    //validates the data

    //sorts the blogs so every blog with equal id are adjacent
    const sorted = orderBlogs(data)
    //removes everyblog with missing names
    const normalized = normalizeBlogs(sorted)
    //removes repeated blogs
    return normalized.reduce((accumulator, currentValue) => {
        if (Array.isArray(accumulator)) {
            if (accumulator[accumulator.length - 1].story_id === currentValue.story_id) return [...accumulator]
            else return [...accumulator, { ...currentValue }]
        }
        else {
            if (accumulator.story_id === currentValue.story_id) return [{ ...accumulator }]
            else return [{ ...accumulator }, { ...currentValue }]
        }
    })
}

const getBlog = async () => {
    info(`fetching data from ${config.TARGET}`)
    info('-----')
    //calls the functions that fetchs the blogs from the API
    const blogs = await axios.get(config.TARGET)
    //extracts only the elements i need from the data
    const parsedData = await parseData(blogs.data.hits)
    //check that all the needed fields are there and removes repeated elements
    const normalizedData = await normalizeData(parsedData)
    return normalizedData
}

const autoLoader = async () => {
    //calls the whole fetching operation
    const blogs = await getBlog()
    return Blog.insertMany(blogs, { ordered: false, rawResult: true })
}

module.exports = {
    autoLoader,
    parseData,
    orderBlogs,
    normalizeBlogs,
    normalizeData,
    getBlog
}
