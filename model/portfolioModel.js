// there are lot of sub model from Intro to Contect 
const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcometext: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        required: true,
    },
    des1: {
        type: String,
        required: true,
    },
    des2: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },

});
const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    Tech: {
        type: Array,
        required: true,
    },

});
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
const contactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Age: {
        type: String,
        required: true,
    },
    Gmail: {
        type: String,
        required: true,
    },
    Contact_no: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

module.exports = {
    Intro: mongoose.model("intro", introSchema),
    About: mongoose.model("about", aboutSchema),
    Experience: mongoose.model("experience", experienceSchema),
    Project: mongoose.model("project", projectSchema),
    Course: mongoose.model("courses", courseSchema),
    Contact: mongoose.model("contacts", contactSchema),
};