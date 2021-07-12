const express = require("express");
const cors = require("cors")
const routes = require("./routes")
const db = require("./models")
const app = express();

app.use(cors());

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3002;

// Add middleware for parsing the body to req.body
// middlewares are executed in the order added, so add before routes
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    req.models = db.models
    next()
})

app.use('/', routes)

app.get('/', (req, res) => {
    res.send("Type /students see all students.")
  })
  db.connectDb().then(() => {
    const listener = app.listen(port, () => {
      console.log(`Server listening on port ${listener.address().port}!`)
    })
  });

module.exports = app