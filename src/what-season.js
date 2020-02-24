module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  else if (!(date instanceof Date)) throw Error;
  else if (isNaN(date)) return "Unable to determine the time of year!";

  let month = date.getMonth();

  if(month === 11 || month < 2){
    return 'winter';
  } 
  if(month === 2 || month < 5){
    return 'spring';
  }
  if(month === 5 || month < 8){
    return 'summer';
  }
  else return 'fall';
};
