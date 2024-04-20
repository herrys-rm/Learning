import express from "express";

const app = express();
const port = 3000;

const today = new Date("April 21, 2024 09:15:00");;
let day = today.getDay();

let type = "A weekday"
let adv = "I'ts time to work hard"

if(day === 0 || day === 6) {
    type = "the weekend!"
    adv = "its weekend time to have fun"
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: type ,
        advice: adv
    } )
})

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
})