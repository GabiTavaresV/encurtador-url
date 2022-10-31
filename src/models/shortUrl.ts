import mongoose from "mongoose";

  export const shortUrlSchema = new mongoose.Schema({
    short: {
        type: String,
        required : true,
        
    }
})

export default shortUrlSchema;

// module.exports = mongoose.model('ShortUrl', shortUrlSchema)