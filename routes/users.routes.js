const { Router } = require("express");
const router = Router();

router.get("/users", (req, res) => {
    res.send("Esto es un GET a users desde mi servidor");
});

router.post("/users", (req, res) => {
    console.log(req.body);
    const object = req.body;
    res.send(object);
});

module.exports = router;