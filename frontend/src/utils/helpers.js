export const capitalise = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDate = (innputDate) => {
  const [year, month, date] = innputDate.split("-");
  const formattedDate = `${date}/${month}/${year}`;
  return formattedDate;
};
