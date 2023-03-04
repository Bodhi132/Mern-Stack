const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}))
const multer = require('multer')
const fs = require('fs')
const mongoose = require('mongoose')
const Post = require('./models/Posts.js')
const User = require('../api/models/User.js')
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = 'sdgkj349dyh0934kdfgkEIRJ12'

app.use(express.json())
app.use(cookieParser());
mongoose.connect('mongodb+srv://bodhi:bodhi@cluster0.u9vhxpl.mongodb.net/?retryWrites=true&w=majority')

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(userDoc)
    }
    catch (e) {
        res.status(422).json(e)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const userDoc = await User.findOne({ email })
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json(userDoc)
            })
        }
        else {
            res.status(422).json('pass not ok')
        }
    }
    else {
        res.json('not found')
    }
})

const photosMiddleware = multer({ dest: 'uploads/' })
// app.post('/upload', upload.single('photo'), (req, res) => {
//     jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//         if (err) throw err;
//         const placeDoc = await Place.create({
//             creator: userData.id.name,
//             description: req.body.description,
//             photos: req.file.originalname
//         });
//         res.json(placeDoc);
//     });
// const uploadedFiles = []
// for(let i=0;i<req.file.length;i++)
// {
//     const {path,originalname}=req.files[i]
//     const parts=originalname.split('.')
//     const ext = parts[parts.length-1]
//     const newPath = path + '.' + ext
//     fs.renameSync(path,newPath)
//     uploadedFiles.push(newPath.replace('uploads/',''))
// }
// })
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads/', ''));
    }
    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const {name}=await User.findById(userData.id)
        const postDoc = await Post.create({
            creator: name,
            description: '',
            photos: uploadedFiles
        });
        res.json(uploadedFiles);
        console.log(postDoc.createdAt)
    });
    
})

app.get('/uploadgetData',async(req,res)=>{
    const filter= await Post.find({})
    res.json(filter)
})

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name,email,_id});
      });
    } else {
      res.json(null);
    }
  });

app.listen(4000, () => {
    console.log("Connected");
})