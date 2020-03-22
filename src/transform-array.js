module.exports = function transform(arr) {
    // console.log(arr);
    if(!(arr instanceof Array)) throw new Error('not array');
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--double-next':
          if (i < arr.length - 1) resultArr.push(arr[i + 1]);
          break;
        case '--discard-next':
            i++;
            break;  
        case '--discard-prev':
            if (resultArr.length !== 0) resultArr.pop();
            break;    
        case '--double-prev':
          if (i >= 1) resultArr.push(arr[i - 1]);
          break;
        default:
          resultArr.push(arr[i]);
      }
    }
    return resultArr;  
};