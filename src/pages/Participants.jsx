import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Toaster } from "react-hot-toast";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { ParticipantList } from "../components/ParticipantsList/ParticipantList";
import { Loader } from "../components/Loader/Loader";
import { fetchParticipantsByEventId } from "../services/events-api";
import { showNotification } from "../services/show-notification";
import css from "./Participants.module.css";

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  const { eventId } = useParams();

  const location = useLocation();

  const { title } = location.state;

  const filteredParticipants = participants.filter((participant) => {
    return (
      participant.name.includes(searchFilter) ||
      participant.email.includes(searchFilter)
    );
  });

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
      <h1>{`"${title ? title : "Event"}" participants`}</h1>
      <label htmlFor="searchFilter">
        <input
          className={css.input}
          placeholder="Enter name or email to search"
          name="searchFilter"
          id="searchFilter"
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </label>

      <ParticipantList participants={filteredParticipants} />

      {isLoading && <Loader />}
      <Toaster />
    </PageWrapper>
  );
};

export default Participants;
