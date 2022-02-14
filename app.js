//Express js

// get express module

const express=require('express') // returns a function
//storing the function in another const
const app=express();
//middleware
app.use(express.json())

//Useful methods
// app.get() -> Get data
// app.post()-> Post new data
// app.put()-> Update data
// app.delete()-> Delete data

// app.get()--> takes two arguments, url ,callback func

app.get('/',(req,res)=>{

    res.send('Hello')
})

//route 2 

//example route to get all courses

// app.get('/api/courses',(req,res)=>{

//     res.send([1,2,3])
// })

//listen to port

app.listen(3000,()=>{
    console.log('Listening ')
})

//route to get single courses
// done through id of course

// app.get('/api/courses/:id',(req,res)=>{

//     res.send(req.params.id)
// })

//query string parameters
//ex: get all courses in 2018 and sort by name
//in url add - sortBy=name
//only change is instead of res.send() use res.send(req.query)

// Handling HTTP Get request
// Get single course

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'}
]
//return single course

// app.get('/api/courses/:id',(req,res)=>{

//   const course= courses.find(c=>c.id===parseInt(req.params.id)) //parse int coz id is string in url and needs to be checked againt int in course
//   //if no course exist
//   if(!course){ 
//       // return 404
//       res.status(404).send('The course doesnt exist')
//   }
//   //else if exists return course
//   res.send(course)
// })

//return everything

app.get('/api/courses',(req,res)=>{

    res.send(courses)
})

//Http Post request
//post url
app.post('/api/courses/post',(req,res)=>{

    //create new course object
    //add it to array

    const new_course={
        id:courses.length+1,
        //name must be read for body of req
        name:req.body.name
    }
    courses.push(new_course)
    res.send('course added')
    console.log(courses)
})

//test using postman
// errors in rest are sent as status codes
//Handlin put request

//Update the course
app.put('/api/courses/:id',(req,res)=>{
    //find course
    //if not return 404
    const course= courses.find(c=>c.id===parseInt(req.params.id)) //parse int coz id is string in url and needs to be checked againt int in course
//   //if no course exist
    if(!course){ 
//       // return 404
        res.status(404).send('The course doesnt exist')
  }
    //update course
    //return updated course
    else{
        course.name=req.body.name
        res.send(course)
    }
})

//DELETE 

app.delete('/api/courses/:id',(req,res)=>{
    const course= courses.find(c=>c.id===parseInt(req.params.id)) //parse int coz id is string in url and needs to be checked againt int in course
    //if no course exist
        if(!course){ 
     // return 404
        res.status(404).send('The course doesnt exist')
       }
       else{
           const index=courses.indexOf(course)
           //splice

           courses.splice(index,1)
           res.send(course)
       }
}) 
