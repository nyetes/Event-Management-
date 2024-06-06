const express = require("express");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const validateEvent = require("../../Server/middelewares/validateEvent");
const authenticate = require("../../Server/middelewares/authenticate");

const router = express.Router();

router.get("/", authenticate, getEvents);
router.post("/", authenticate, validateEvent, createEvent);
router.put("/:id", authenticate, validateEvent, updateEvent);
router.delete("/:id", authenticate, deleteEvent);

module.exports = router;
