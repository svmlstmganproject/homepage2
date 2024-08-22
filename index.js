let expess=require('express')
let app=expess();
port =process.env.port||3000;

app.set('view engine','ejs');
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.listen(port,()=>{
    console.log('hellow')
})