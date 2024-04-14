import express, { raw } from 'express';
const app = express();
const port = 3000

app.get("/", (req, res) => {
    // console.log(req.rawHeaders)
    res.send("Welcome Home Page !")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.get("/contact", (req, res) => {
    res.send("Contact Page")
})

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
})