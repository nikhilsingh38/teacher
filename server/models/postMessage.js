import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: String,
        default: new Date()
    },
});

const PostMessage = mongoose.model('postMessage', postSchema);

export default PostMessage;