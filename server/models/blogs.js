const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true,

    },
    author: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    removed:{
        type:Boolean,
        required:true
    },
    story_id:{
        type:String,
        required:true,
        unique:true,
    },
    created_at:{
        type:Date,
        required:true,
    },
    created_at_i:{
        type:Number,
        required:true,
    }

})

blogSchema.plugin(uniqueValidator)


blogSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.removed
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Blog=mongoose.model("Blogs", blogSchema)

module.exports = Blog