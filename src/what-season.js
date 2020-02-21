module.exports = function getSeason(date) {
  let month = date.getMonth();
  if(month === undefined || month === '' || month === ' ') throw 'Unable to determine the time of year!';
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
