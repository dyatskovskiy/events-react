import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { ParticipantList } from "../components/ParticipantsList/ParticipantList";
import { fetchParticipantsByEventId } from "../services/events-api";
import { Loader } from "../components/Loader/Loader";
import { showNotification } from "../services/show-notification";
import { Toaster } from "react-hot-toast";

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { eventId } = useParams();

  const location = useLocation();
  const { title } = location.state || {};

  useEffect(() => {
    async function getparticipants() {
      try {
        setIsLoading(true);
        const participants = await fetchParticipantsByEventId(eventId);

        setParticipants(participants);
      } catch (error) {
        setIsLoading(false);
        showNotification(false, error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }

    getparticipants();
  }, [eventId]);

  return (
    <PageWrapper>
      {isLoading && <Loader />}
      <ParticipantList eventName={title} participants={participants} />

      <Toaster />
    </PageWrapper>
  );
};

export default Participants;
