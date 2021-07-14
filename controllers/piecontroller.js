// const Express = require("express")

// const router = Express.Router()

//OR

const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("Main Route Hit!")
})

module.exports = router