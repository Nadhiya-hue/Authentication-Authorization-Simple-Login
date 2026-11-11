const path = require('path');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usermodel = require(`./models/user-model`);
const cookieparser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(cookieparser());

app.get('/', (req,res)=>{
    res.render('signup');
})
app.post('/create', async (req,res)=>{
    let {name, email, age, password} = req.body;
    
    // Modern, clean async hashing using the actual password variable
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    let createduser = await usermodel.create({
        name,
        email,
        age,
        password: hash
    })
    let token = jwt.sign({email}, 'secret');
    res.cookie('token', token);
    res.send(createduser);
    
})
//Manual Logout Rout
app.get('/logout', (req,res)=>{
    res.cookie('token', '');
    res.redirect('/login')
})
app.get('/login', (req,res)=>{
    res.render('login');
})
app.post('/login', async (req,res)=>{
    //find user based on email
    let user = await usermodel.findOne({email:req.body.email});
    console.log(user);
    if(!user) return res.send('Something Went Wrong!');
    
    //Password Check
    let result = await bcrypt.compare(req.body.password, user.password);
    if(result == true){
        let token = jwt.sign({email:user.email}, 'secret');
        res.cookie('token', token); 
        res.send("Login Success");
    } else {
        res.send("Something Went Wrong!");
    }

});

app.listen(3000);