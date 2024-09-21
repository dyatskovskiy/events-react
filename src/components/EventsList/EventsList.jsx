import css from "./EventsList.module.css";
import events from "../../tmpData/events.json";
import { EventCard } from "../EventCard/EventCard";

export const EventsList = () => {
  return (
    <>
      <h1 className={css.title}>Events</h1>

      <ul className={css.list}>
        {events.map((eventData) => {
          return (
            <li key={eventData.id}>
              <EventCard eventDetails={eventData} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
