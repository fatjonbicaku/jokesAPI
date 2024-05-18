const express = require("express")
const db = require("./configs/mongoose.config")
const app = express();
const port = 3000;
const jokeRoutes = require("./routes/joke.routes")

app.use(express.json(), express.urlencoded({extended:true}))

jokeRoutes(app);


app.listen(port , () => console.log(`Server is running on port ${port}`))