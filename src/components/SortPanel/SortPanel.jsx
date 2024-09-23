import css from "./SortPanel.module.css";

export const SortPanel = ({
  onTitleClick,
  onDateClick,
  onOrganizerClick,
  order,
}) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Sort {order === "ascending" ? "↓" : "↑"}:</p>

      <button className={css.button} onClick={onTitleClick}>
        Title
      </button>

      <button className={css.button} onClick={onDateClick}>
        Event Date
      </button>

      <button className={css.button} onClick={onOrganizerClick}>
        Organizer
      </button>
    </div>
  );
};
