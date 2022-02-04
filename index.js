const addDays = require("date-fns/addDays");

let addingDays = (days) => {
  const newDate = addDays(new Date(2020, 8, 20), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
console.log(addingDays());

module.exports = addDays;
