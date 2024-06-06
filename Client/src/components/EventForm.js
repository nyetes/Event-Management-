import React, { useState } from "react";
import axios from "axios";

function EventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    participants: 0,
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/events", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the event!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="participants"
        value={formData.participants}
        onChange={handleChange}
        placeholder="Participants"
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
