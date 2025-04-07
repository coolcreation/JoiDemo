import mongoose from 'mongoose';

// Define User Schema
const blogpostSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    details: { type: String, required: true }, 
});

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

export default Blogpost;

