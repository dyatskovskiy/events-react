import css from "./ParticipantList.module.css";
import participants from "../../tmpData/participants.json";
import { ParticipantCard } from "../ParticipantCard/ParticipantCard";

export const ParticipantList = ({ eventName }) => {
  return (
    <div>
      <h1 className={css.title}>{`"${eventName}" participants`}</h1>

      <ul className={css.list}>
        {participants.map((person) => {
          return (
            <li key={person.id} className={css.item}>
              <ParticipantCard participantData={person} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
