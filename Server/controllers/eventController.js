const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../events.json");

function readEventsFromFile() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeEventsToFile(events) {
  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
}

exports.getEvents = (req, res) => {
  const events = readEventsFromFile();
  const { title, startDate, endDate } = req.query;

  let filteredEvents = events;

  if (title) {
    filteredEvents = filteredEvents.filter((event) =>
      event.title.includes(title)
    );
  }

  if (startDate) {
    filteredEvents = filteredEvents.filter(
      (event) => new Date(event.startDate) >= new Date(startDate)
    );
  }

  if (endDate) {
    filteredEvents = filteredEvents.filter(
      (event) => new Date(event.endDate) <= new Date(endDate)
    );
  }

  res.json(filteredEvents);
};

exports.createEvent = (req, res) => {
  const events = readEventsFromFile();
  const newEvent = { id: events.length + 1, ...req.body };

  events.push(newEvent);
  writeEventsToFile(events);

  res.status(201).json(newEvent);
};

exports.updateEvent = (req, res) => {
  const events = readEventsFromFile();
  const eventId = parseInt(req.params.id);
  const eventIndex = events.findIndex((event) => event.id === eventId);

  if (eventIndex === -1) {
    return res.status(404).json({ message: "Event not found" });
  }

  events[eventIndex] = { ...events[eventIndex], ...req.body };
  writeEventsToFile(events);

  res.json(events[eventIndex]);
};

exports.deleteEvent = (req, res) => {
  const events = readEventsFromFile();
  const eventId = parseInt(req.params.id);
  const updatedEvents = events.filter((event) => event.id !== eventId);

  if (events.length === updatedEvents.length) {
    return res.status(404).json({ message: "Event not found" });
  }

  writeEventsToFile(updatedEvents);
  res.status(204).send();
};
