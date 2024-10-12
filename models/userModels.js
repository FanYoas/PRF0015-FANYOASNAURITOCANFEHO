import express from "express";
import { Schema } from "mongoose";

const newUser = new Schema({
    name: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true

    }, 
    nohp:{
        type: String,
        require: true
    }
});

export default express ("newUser", Schema);

