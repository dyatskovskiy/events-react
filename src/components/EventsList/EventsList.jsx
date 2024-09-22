import css from "./EventsList.module.css";
import { EventCard } from "../EventCard/EventCard";

export const EventsList = ({ events }) => {
  return (
    <>
      <h1 className={css.title}>Events</h1>

      {events.length > 0 ? (
        <ul className={css.list}>
          {events.map((eventData) => {
            return (
              <li key={eventData._id}>
                <EventCard eventDetails={eventData} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no events now</p>
      )}
    </>
  );
};
