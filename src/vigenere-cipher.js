class VigenereCipheringMachine {
    constructor(message) {
      this.message = message;
      this.words = 'abcdefghijklmnopqrstuvwxyz';
    }
    encrypt(str, key) {
      let letters = [];
      let keys = [];
      let encryptArr = [];
      let result = [];
      let string = str.toLowerCase().split('');
      let key_string = key.toLowerCase().split('');
      let count = 0;
      let keyCount = 0;
  
      if(!str || !key) throw new Error();
      if(this.message === undefined) this.message = true;
  
      for(let i = 0; i < string.length; i++) {
        if(this.words.indexOf(string[i]) != -1) {
          letters.push(string[i]);
        }
      };
      for(let i = 0; i < letters.length; i++) {
        if(keyCount < key_string.length) {
          keys.push(key_string[keyCount]);
          keyCount += 1;
        } else {
          keyCount = 0;
          keys.push(key_string[keyCount]);
          keyCount += 1;
        }
      };
      letters.forEach((l, i) => {
        if (this.words.indexOf(l) + this.words.indexOf(keys[i]) >= 26) {
            encryptArr.push(this.words.charAt(this.words.indexOf(l) + this.words.indexOf(keys[i]) - 26))
        } else {
            encryptArr.push(this.words.charAt(this.words.indexOf(l) + this.words.indexOf(keys[i])))
        }
      });

      string.forEach((l, i) => {
        let el = this.words.indexOf(l);
        if(el === -1) {
          count += 1;
          result.push(l);
        } else {
          result.push(encryptArr[i - count]);
        }
      })
      if(!this.message) result.reverse();
  
      return result.join('').toUpperCase();
  }    
  
    decrypt(str, key) {
      let letters = [];
      let keys = [];
      let encryptArr = [];
      let result = [];
      let string = str.toLowerCase().split('');
      let key_string = key.toLowerCase().split('');
      let count = 0;
      let keyCount = 0;
  
      if(!str || !key) throw new Error();
      if(this.message === undefined) this.message = true;
  
      for(let i = 0; i < string.length; i++) {
        if(this.words.indexOf(string[i]) != -1) {
          letters.push(string[i]);
        }
      };
      for(let i = 0; i < letters.length; i++) {
        if(keyCount < key_string.length) {
          keys.push(key_string[keyCount]);
          keyCount += 1;
        } else {
          keyCount = 0;
          keys.push(key_string[keyCount]);
          keyCount += 1;
        }
      };
  
      letters.forEach((l, i) => {
        if (this.words.indexOf(l) - this.words.indexOf(keys[i]) < 0) {
            encryptArr.push(this.words.charAt(this.words.indexOf(l) - this.words.indexOf(keys[i]) + 26))
        } else {
            encryptArr.push(this.words.charAt(this.words.indexOf(l) - this.words.indexOf(keys[i])))
        }
      });
  
      string.forEach((l, i) => {
        let el = this.words.indexOf(l);
        if(el == -1) {
          count += 1;
          result.push(l);
        } else {
          result.push(encryptArr[i - count]);
        }
      })
      if(!this.message) result.reverse();
      return result.join('').toUpperCase();
    }
}
module.exports = VigenereCipheringMachine;
