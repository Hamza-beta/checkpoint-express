const express=require('express')
const app=express()
const port=3000
app.listen(port)
const workingDate=new Date()
console.log(workingDate)
const workingHour=workingDate.getHours()
const workingDay=workingDate.getDay()

const datetest=(req,res,next)=>{
if (workingDay==0 || workingHour>17 || workingHour<9){

    return res.sendFile(__dirname+'/public/closed.html')
}
next()
}
app.use(datetest)


 app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/public/services.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/styles.css',(req,res)=>{
    res.sendFile(__dirname+'/public/styles.css')
})
