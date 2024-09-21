import { Link } from "react-router-dom";
import css from "./EventCard.module.css";

export const EventCard = ({ eventDetails }) => {
  const { title, description, eventDate, organizer } = eventDetails;

  return (
    <div className={css.wrapper}>
      <div>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{description}</p>
        <p className={css.date}>{eventDate}</p>
        <p className={css.organizerName}>{organizer}</p>
      </div>

      <div className={css.buttonsBlock}>
        <Link
          to={`/registration/${eventDetails.id}`}
          className={css.link}
          type="button"
        >
          Register
        </Link>

        <Link
          to={`/participants/${eventDetails.id}`}
          className={css.link}
          type="button"
        >
          View
        </Link>
      </div>
    </div>
  );
};
