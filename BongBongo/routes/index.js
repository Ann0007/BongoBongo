const express = require('express')
const router = express.Router()
const students = require('./students.js')

router.get("/students", students.get)
router.post("/students", students.post)
router.get("/students/:id", students.getById)
router.delete("/students/:id", students.deleteById)
router.put("/students/:id", students.put)

module.exports = router