const bugs = require('./bugs.json')
const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const server = express()
module.exports = server

//function

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here



// './' get route
server.use('/', routes)

// './' post route for handling the guess, and redirecting to correct/wrong answer page.

// server.post('/moth/:id/', function (req, res) {
//     const theMoth = req.body
//     if (bugs.bugs.id = theMoth.id){
//         const winorlose = win
//     } else 
//     const winorlose = lose
//     res.send(`/${winorlose}`)
// }




// './:id' for just displaying the moths not required for MVP but should be easy enough to implement very quickly.
