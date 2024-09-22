import { Link } from "react-router-dom";
import css from "./EventCard.module.css";
import { formatDate } from "../../services/format-date";

export const EventCard = ({ eventDetails }) => {
  const { title, description, eventDate, organizer } = eventDetails;

  const date = formatDate(eventDate);

  return (
    <div className={css.wrapper}>
      <div>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{description}</p>
        <p className={css.date}>{date}</p>
        <p className={css.organizerName}>{organizer}</p>
      </div>

      <div className={css.buttonsBlock}>
        <Link to={`/registration/${eventDetails._id}`} className={css.link}>
          Register
        </Link>

        <Link
          to={`/participants/${eventDetails._id}`}
          state={{ title }}
          className={css.link}
        >
          View
        </Link>
      </div>
    </div>
  );
};
