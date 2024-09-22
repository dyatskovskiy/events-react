import { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { EventsList } from "../components/EventsList/EventsList";
import { fetchEvents } from "../services/events-api";

const EventsBoard = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getEvents() {
      try {
        setIsLoading(true);
        const events = await fetchEvents();

        setEvents(events);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getEvents();
  }, []);

  return (
    <PageWrapper>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {events && <EventsList events={events} />}
    </PageWrapper>
  );
};

export default EventsBoard;
