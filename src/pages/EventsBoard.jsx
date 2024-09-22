import { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { EventsList } from "../components/EventsList/EventsList";
import { fetchEvents } from "../services/events-api";
import { Toaster } from "react-hot-toast";
import { showNotification } from "../services/show-notification";
import { Loader } from "../components/Loader/Loader";

const EventsBoard = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getEvents() {
      try {
        setIsLoading(true);
        const events = await fetchEvents();

        setEvents(events);
      } catch (error) {
        setIsLoading(false);
        showNotification(false, error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }

    getEvents();
  }, []);

  return (
    <PageWrapper>
      {isLoading ? <Loader /> : <EventsList events={events} />}

      <Toaster />
    </PageWrapper>
  );
};

export default EventsBoard;
