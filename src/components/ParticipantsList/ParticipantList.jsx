import css from "./ParticipantList.module.css";
import { ParticipantCard } from "../ParticipantCard/ParticipantCard";

export const ParticipantList = ({ eventName, participants }) => {
  return (
    <div>
      <h1 className={css.title}>{`"${
        eventName ? eventName : "Event"
      }" participants`}</h1>
      {participants.length > 0 ? (
        <ul className={css.list}>
          {participants.map((person) => {
            return (
              <li key={person._id} className={css.item}>
                <ParticipantCard participantData={person} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no participants now</p>
      )}
    </div>
  );
};
