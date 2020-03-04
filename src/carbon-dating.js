const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let num = parseFloat(sampleActivity) ;
  
  if(!num || (num < 0 || num > 15) || typeof sampleActivity !== "string") return false;
  else {
    let k = 0.693 / HALF_LIFE_PERIOD;            //calculate the rate constant for the reaction from its half-life (5730 yr) using Equation  3 (formula)
    let t = Math.log(MODERN_ACTIVITY/num) / k;   //sample age(formula)
    return Math.ceil(t);
  }
};