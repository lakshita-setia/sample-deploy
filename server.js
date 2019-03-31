const app= require('expres')()

const PORT= process.env.PORT || 4444

app.get('/', (req,res)=> res.send("hello!"))

app.listen(PORT, ()=>{
    console.log(`Started on http://localhost:${PORT}`)
})