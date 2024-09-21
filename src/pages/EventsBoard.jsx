import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { EventsList } from "../components/EventsList/EventsList";

const EventsBoard = () => {
  return (
    <PageWrapper>
      <div>
        <EventsList />
      </div>
    </PageWrapper>
  );
};

export default EventsBoard;
