const express = require("express");
const app = express();

app.set("view engine", "ejs"); // como ele vai renderizar o html

app.get("/", function (req, res) {
    const itens = [
        {
            title: "D",
            message:"esenvolver aplicações/ serviços de forma facil"
        },
        {
            title: "E",
            message:"JS usa JavaScript para renderizar o HTML"
        },
        {
            title: "M",
            message:"uito fácil usar"
        },
        {
            title: "A",
            message:"morzinho"
        },
        {
            title: "I",
            message:"nstall ejs"
        },
        {
            title: "S",
            message:"intaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JavaScript"

    
    res.render("pages/index", {
        qualitys: itens,
        subtitle: subtitle,
    });
})
app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");