export const capitalise = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDate = (inputDate) => {
  const [year, month, date] = inputDate.split("-");
  const formattedDate = `${date}/${month}/${year}`;
  return formattedDate;
};
