import express from "express";

const app = express();
const port = 3000;



app.get("/", (req, res) => {
    const today = new Date();
    let day = today.getDay();

    console.log(day);
    let type = "a week day";
    let adv = "its time to workday";

    if (day ===0 || day === 6) {
        type = " the weekend";
        adv  = " its time to rest and have some fun";
    }
    
    res.render("index.ejs", {
        dayType: type,
         advice: adv,  
        } );
});

app.listen(port, () => {
    console.log("server running on " + port)
});