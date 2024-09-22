import { useState } from "react";
import { useParams } from "react-router";
import { registerNewParticipant } from "../../services/events-api";
import { createDtoFromFormValues } from "../../services/create-dto-from-form-values";
import css from "./RegistrationForm.module.css";
import { showNotification } from "../../services/show-notification";
import { Toaster } from "react-hot-toast";
import { Loader } from "../Loader/Loader";

export const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { eventId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataTransferObject = createDtoFromFormValues(
      e.target.elements,
      eventId
    );

    try {
      setIsLoading(true);
      const response = await registerNewParticipant(dataTransferObject);

      if (response.status === 201) {
        showNotification(true, "Successfully registered");
      }
    } catch (error) {
      setIsLoading(false);
      showNotification(false, error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}

      <h1 className={css.title}>Event registration</h1>

      <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={css.inputBlock}>
          <label htmlFor="name" className={css.inputLabel}>
            Full name
          </label>
          <input className={css.input} type="text" id="name" name="name" />

          <label htmlFor="email" className={css.inputLabel}>
            Email
          </label>
          <input className={css.input} type="text" id="email" name="email" />

          <label htmlFor="dateOfBirth" className={css.inputLabel}>
            Date of birth
          </label>
          <input
            className={css.input}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
          />
        </div>

        <div className={css.radioBlock}>
          <p className={css.radioTitle}>Where did you hear about this event?</p>

          <input
            className={css.radioButton}
            type="radio"
            id="social"
            name="discoveryMethod"
            value="social"
          />

          <label className={css.radioLabel} htmlFor="social">
            Social media
          </label>

          <input
            className={css.radioButton}
            type="radio"
            id="friends"
            name="discoveryMethod"
            value="friends"
          />

          <label className={css.radioLabel} htmlFor="friends">
            Friends
          </label>

          <input
            className={css.radioButton}
            type="radio"
            id="myself"
            name="discoveryMethod"
            value="myself"
          />

          <label className={css.radioLabel} htmlFor="myself">
            Found myself
          </label>
        </div>

        <button className={css.button} type="submit">
          Register
        </button>
      </form>

      <Toaster />
    </div>
  );
};
