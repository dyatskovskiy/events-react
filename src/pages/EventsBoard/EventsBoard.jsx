import css from "./EventsBoard.module.css";
import { EventsList } from "../../components/EventsList/EventsList";

const EventsBoard = () => {
  return (
    <main className={css.pageWrapper}>
      <h1 className={css.title}>Events</h1>
      <div>
        <EventsList />
      </div>
    </main>
  );
};

export default EventsBoard;
