module.exports = function repeater(str, options) {
    let arr = [];

    let repeat = (arr, str, repeatTimes, separator = '+', addSeparator = '|') => {
      if (repeatTimes === undefined) arr.push(String(str));
      else {
        for (let i = 0; i < repeatTimes; i++) {
            let el = String(str);
            arr.push(el);
        }
      }
      if (addSeparator !='') return arr.join(addSeparator);
      if (separator != '') return arr.join(separator);
    };

    let arr2 = [];
    let add_str = '';

    if ((options.addition === false) || (options.addition === null) || options.addition) 
        add_str = repeat(arr2, options.addition, options.additionRepeatTimes, '', options.additionSeparator);

    return repeat(arr, str + add_str, options.repeatTimes, options.separator, '');
  };
    