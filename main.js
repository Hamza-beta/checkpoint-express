/*const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/',(req,res)=>{
    res.send('Our service')
})
app.get('/',(req,res)=>{
    res.send('Contact Us')
})
const port=5000
app.listen(port,()=>console.log(`server is running on port ${port}`))
*/
const express=require('express')
const app=express()
const logger=(req,res,next)=>{
console.table({method: req.method})
console.table({url: req.url})
next()
}
app.use(logger)
app.get('/',  (req,res)=>{
res.send('<h1>Home</h1>')
})
app.use(express.static('public'))
app.get('/', (req,res)=>{
res.sendFile(__dirname+'/public/index.html')
} )
const port=5000

app.listen(port,  console.log(` port running in ${port}  `))