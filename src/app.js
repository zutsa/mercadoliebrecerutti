const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve(__dirname, "../public")))
app.set('views',path.resolve(__dirname,'./views'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});


app.get("/oficialStores", (req, res) => {
    res.sendFile(__dirname + "/views/oficialStores.html");
});

app.get("*", (req, res) => {
    res.status(404).sendFile(__dirname + "/views/error.html");
});


const port = process.env.PORT || 3030; 

app.post("/", (req, res) => {

    res.sendFile(__dirname + "/views/home.html");
});
app.listen(port, ()=>console.log("Servidor corriendo en el puerto 3030"))