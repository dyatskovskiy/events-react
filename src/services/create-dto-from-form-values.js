export const createDtoFromFormValues = (formElements, eventId) => {
  const { name, email, dateOfBirth, discoveryMethod } = formElements;

  return {
    participant: {
      name: name.value,
      email: email.value,
      dateOfBirth: dateOfBirth.value,
      discoveryMethod: discoveryMethod.value,
    },
    eventId: eventId,
  };
};
