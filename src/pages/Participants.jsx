import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { ParticipantList } from "../components/ParticipantsList/ParticipantList";
import { fetchParticipantsByEventId } from "../services/events-api";

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState("");
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
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getparticipants();
  }, [eventId]);

  return (
    <PageWrapper>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ParticipantList eventName={title} participants={participants} />
    </PageWrapper>
  );
};

export default Participants;
