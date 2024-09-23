import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Toaster } from "react-hot-toast";
import { registerNewParticipant } from "../../services/events-api";
import { showNotification } from "../../services/show-notification";
import { Loader } from "../Loader/Loader";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import css from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { eventId } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const startDate = watch("dateOfBirth");

  useEffect(() => {
    register("dateOfBirth", {
      required: "Date of birth is required",
      validate: {
        age: (value) => {
          const age = new Date().getFullYear() - new Date(value).getFullYear();
          return age >= 16 || "You must be at least 16 years old";
        },
      },
    });
  }, [register]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await registerNewParticipant({
        participant: data,
        eventId,
      });

      if (response.status === 201) {
        showNotification(true, "Successfully registered");
        reset();

        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      }
    } catch (error) {
      showNotification(false, error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}

      <h1 className={css.title}>Event registration</h1>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputBlock}>
          <label htmlFor="name" className={css.inputLabel}>
            Full name
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </label>
          <input
            className={css.input}
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least  2 characters",
              },
            })}
          />
          <label htmlFor="email" className={css.inputLabel}>
            Email
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </label>
          <input
            className={css.input}
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
          />
          <label htmlFor="dateOfBirth" className={css.inputLabel}>
            Date of birth
            {errors.dateOfBirth && (
              <p className={css.error}>{errors.dateOfBirth.message}</p>
            )}
          </label>
          <DatePicker
            selected={startDate}
            dateFormat="dd-MM-yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            yearDropdownItemNumber={100}
            maxDate={new Date()}
            scrollableYearDropdown
            onChange={(date) => {
              setValue("dateOfBirth", date, { shouldValidate: true });
            }}
            className={css.input}
          />
        </div>

        <div className={css.radioBlock}>
          <p className={css.radioTitle}>Where did you hear about this event?</p>
          {errors.discoveryMethod && (
            <p className={css.radioError}>{errors.discoveryMethod.message}</p>
          )}

          <input
            className={css.radioButton}
            type="radio"
            id="social"
            value="social"
            {...register("discoveryMethod", { required: "Select one option" })}
          />
          <label className={css.radioLabel} htmlFor="social">
            Social media
          </label>

          <input
            className={css.radioButton}
            type="radio"
            id="friends"
            value="friends"
            {...register("discoveryMethod")}
          />
          <label className={css.radioLabel} htmlFor="friends">
            Friends
          </label>

          <input
            className={css.radioButton}
            type="radio"
            id="myself"
            value="myself"
            {...register("discoveryMethod")}
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
