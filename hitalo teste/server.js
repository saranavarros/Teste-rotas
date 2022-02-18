const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");




const port = 3040;

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () =>{
    console.log(`started at http://localhost:${port}`);
});