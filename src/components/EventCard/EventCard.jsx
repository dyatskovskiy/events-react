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
        <button className={css.button} type="button">
          Register
        </button>

        <button className={css.button} type="button">
          View
        </button>
      </div>
    </div>
  );
};
