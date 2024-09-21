import css from "./ParticipantCard.module.css";

export const ParticipantCard = ({ participantData }) => {
  const { name, email } = participantData;

  return (
    <div className={css.cardWrapper}>
      <p className={css.name}>{name}</p>

      <p className={css.email}>{email}</p>
    </div>
  );
};
