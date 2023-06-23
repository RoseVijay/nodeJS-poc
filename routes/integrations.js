const express = require("express");
const router = express.Router();
const {
    integrationPost,
    integrationGet,
    integrationDelete,
} = require("../controllers/integration");

router.post("/integration-post", integrationPost);
router.get("/integration-get", integrationGet);
router.post("/integration-delete", integrationDelete);

module.exports = router;
