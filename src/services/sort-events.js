export const sortEvents = (events, sortBy, sortOrder) => {
  if (!sortBy || !sortOrder) {
    return events;
  }

  const sortedEvents = events.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "ascending") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return sortedEvents;
};
