import css from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  return (
    <div>
      <h1 className={css.title}>Event registration</h1>

      <form className={css.form}>
        <div className={css.inputBlock}>
          <label htmlFor="name" className={css.inputLabel}>
            Full name
          </label>
          <input className={css.input} type="text" id="name" name="name" />
          <label htmlFor="email" className={css.inputLabel}>
            Email
          </label>
          <input className={css.input} type="text" id="email" name="email" />
          <label htmlFor="date" className={css.inputLabel}>
            Date of birth
          </label>
          <input className={css.input} type="date" id="date" name="date" />
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
    </div>
  );
};
