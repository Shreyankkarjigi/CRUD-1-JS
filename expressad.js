//Middleware in express

//req---> what you send to server
//res---> what server sends you back


//Middleware: Middleware is software containing functions that execute during the request-response cycle 

//Every route defined is a middle ware

// demo of middle ware

const express=require('express')

const app=express()

//use the mw
//always should be at top
app.use(logger)


app.get('/',auth,(req,res)=>{
    res.send('Home page')
    console.log('home')

    //middlware can be defined here too
    //we defined another func below called auth 
    //call the middleware in the the path
    //
})

app.get('/user',(req,res)=>{
    console.log('users page')
    res.send('Users page')
})


//define a logging

function logger(req,res,next){

    console.log('log')
    //next points to next middleware
    // in this case the route currenly openeded

    next()
}

function auth(req,res,next){

    console.log('AUTH')
    next()
    //we will call this in home route
}




app.listen(3000,()=>{
    console.log('listening')
})

