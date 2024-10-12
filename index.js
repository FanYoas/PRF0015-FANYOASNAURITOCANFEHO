import express from 'express';
import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Schema } from "mongoose";


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



// const MONGOURL = process.env.MONGOURL;
// const PORT = process.env.PORT;

mongoose
// .connect(MONGOURL)
.connect('mongodb://127.0.0.1:27017/Rekening')
.then(() => console.log('Connected!'));


const rekening = new Schema({
    name: {
        type: String,
    }, 
    email: {
        type: String,

    }, 
    nohp:{
        type: String,
    }
});

const nasabah = mongoose.model('nasabah', rekening);

const add = new nasabah({
    "name": "Fanho",
    "email": "Fanho@gmail.com",
    "nohp": "085888777888"
});


console.log(add);
app.post('/Rekening', async (req, res) => {
    await res.send(add)
    await add.save()
});
//     return res.send('POST HTTP method on product resource');
//    });
// app.get('/', (req, res) => {

//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

