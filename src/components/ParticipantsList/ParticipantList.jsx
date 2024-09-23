import css from "./ParticipantList.module.css";
import { ParticipantCard } from "../ParticipantCard/ParticipantCard";

export const ParticipantList = ({ participants }) => {
  return (
    <div>
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
