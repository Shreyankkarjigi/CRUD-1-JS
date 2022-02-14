//Goal: To develop API to read Movies genre and perform CRUD Over it
//Use atleast one middleware 
//Use express and postman to test api

const express=require('express')
const app=express()
app.use(express.json())

//Sample genre data
const genre=[

    {id:1,genre:"Horror"},
    {id:2,genre:"Comedy"},
    {id:3,genre:"Action"},
    {id:4,genre:"KDrama"}
]

//GET api

app.get('/',(req,res)=>{
    //send entire list
    res.send(genre)

    //here ill use middleware to take input from user if , they have acess display the data, else prompt not admin
    

})

//POST: add new list

app.post('/genre/post',(req,res)=>{
    //add new id 

    const new_data={
        id:genre.length+1,
        genre:req.body.genre
    }
    //push courses
    genre.push(new_data)
    console.log('Courses added')
    res.send(genre)
})

//PUT request 

app.put('/genre/put/:id',(req,res)=>{
    const genres= genre.find(g=>g.id===parseInt(req.params.id)) 
//   //if no course exist
    if(!genres){ 
//       // return 404
        res.status(404).send('The genre doesnt exist')
  }

    else{
        genre.genre=req.body.genre
        res.send(genre)
        console.log(genre)
    }
})
//DELETE 
app.delete('/api/genre/delete/:id',(req,res)=>{
    const genres= genre.find(g=>g.id===parseInt(req.params.id)) 
    //   //if no course exist
        if(!genres){ 
    //       // return 404
            res.status(404).send('The genre doesnt exist')
      }
       else{
           const index=genre.indexOf(genre)
           //splice

           genre.splice(index,1)
           res.send(genre)
       }
}) 
//App server
app.listen(3000,()=>{
    console.log('Listening')
})