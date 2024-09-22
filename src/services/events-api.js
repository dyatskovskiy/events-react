import axios from "axios";

axios.defaults.baseURL = "https://events-api-56xx.onrender.com/";

export const fetchEvents = async () => {
  const events = await axios.get("/events").then((res) => res.data);

  return events;
};

export const fetchParticipantsByEventId = async (eventId) => {
  const participants = await axios
    .get(`/events/${eventId}/participants`)
    .then((res) => res.data);

  return participants;
};

export const registerNewParticipant = async ({ participant, eventId }) => {
  const newParticipant = await axios
    .post(`/participants`, {
      participant,
      eventId,
    })
    .then((res) => res);

  return newParticipant;
};
