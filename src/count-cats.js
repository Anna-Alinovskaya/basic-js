module.exports = function countCats(matrix) {
  let number = 0;
  for(let i = 0; i < matrix.length; i++){
  
    for(let k = 0; k < matrix[i].length; k++){
     
      if(matrix[i][k] === "^^") number++;
    }
  }
  return number;
};
