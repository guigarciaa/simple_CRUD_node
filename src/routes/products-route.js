"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");
const upload = require("../services/uploads-service");
const authService = require("../services/auth-service");

router.get("/", controller.get);
router.get("/:slug", controller.getBySlug);
router.get("/admin/:id", controller.getById);
router.get("/tags/:tag", controller.getByTag);
router.post("/", [authService.isAdmin, upload.image.single("image")], controller.post);
router.put("/:id", authService.isAdmin, controller.put);
router.delete("/", authService.isAdmin, controller.delete);

module.exports = router;
