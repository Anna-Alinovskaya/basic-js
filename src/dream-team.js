module.exports = function createDreamTeam(members) {
  if(members instanceof Array) {
    let result = [];
    for(let i = 0; i < members.length; i++){
      if(typeof(members[i]) === 'string') {
       for(let k = 0; k < members[i].length; k++){
          if(members[i][k] === ' ') continue;
          else result.push(members[i][k].toUpperCase());
          break;
        }
      }
    } 
    return result.sort().join('');
  }else return false;
};