export const formatDate = (rawDate) => {
  const date = new Date(rawDate);

  const day = date.getDay();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
