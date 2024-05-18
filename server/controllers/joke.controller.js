const Joke = require("../models/joke.model")


module.exports.createJoke = (req,res)=>{
Joke.create(req.body)
.then((jokeAdded)=>{
  res.json({joke: jokeAdded})
})
.catch((err)=> {
  console.log("Error adding joke to DB " + err)
  res.json(err)
})
}

module.exports.listAllJokes = (req,res) => {
  Joke.find()
  .then((allJokes)=>{
    res.json(allJokes)
  })
  .catch((err)=> {
    console.log(`Error getting all jokes ${err}`)
    res.json(err)
})
}

module.exports.getJokeById = (req,res) => {
  Joke.findOne({_id: req.params.id})
  .then((singleJoke)=>{
    res.json({joke: singleJoke})
  })
  .catch((err)=> {
    console.log(`Error getting joke ${err}`)
    res.json(err)
  })
}

module.exports.editJoke = (req,res) =>{
  Joke.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true })
  .then((editedJoke)=>{
    res.json({message:"Joke edited sucessfully", joke: editedJoke})
  })
  .catch((err)=> {
    console.log(`Error editing joke ${err}`)
    res.json(err)
  })
}

module.exports.deleteJoke = (req,res) =>{
  Joke.deleteOne({_id: req.params.id})
  .then((deletedJoke)=>{
    res.json({message:"Joke deleted sucessfully"})
  })
  .catch((err)=> {
    console.log(`Error deleting joke ${err}`)
    res.json(err)
  })
}