const express = require('express')
const db = new Map()

const app = express()
const port = 300

app.use(express.json())


app.get('/',(req,res)=>{
    return res.send("Hello Dunia")
})

app.post('/todos',(req,res)=>{

    db.set("123", req.body)
    
    return res.json({"Success create todo : " : req.body})
})

app.get('/todos', (req, res)=> {
    const data= Array.from(db.values()) 
    return res.json({
        data
    })
})

app.get('/todos/:id', (req, res)=> {
    const id = req.params.id
    const data = db.get(id)
    console.log(db)
    return res.json(data)
})

app.delete('/todos/:id', (req, res)=> {
    const id = req.params.id
    const data = db.delete(id)
    console.log(db)
    return res.json({message: "Success detele todo"})
})

app.put('/todos/:id', (req, res)=>{
    const id = req.params.id
    db.set(id, res.body)
    return res.json ({message:"Success update todo"})
})

app.patch('/todos/:id', (req, res)=>{
    const id = req.params.id
    const exsistingTodo = {title: req.body.title, description: exsistingTodo.description};
    db.set(id, updatedTitle);

    return res.json({message: "Success update todo title"})
})

app.listen(port, ()=> {
    console.log('Lisen on localhost:' + port)
})
