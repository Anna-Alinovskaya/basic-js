const chainMaker = {
  
  arr: [],

  getLength() {
    return chainMaker.arr.length;
  },

  addLink(value) {
    let result = `( ${value} )`;
    chainMaker.arr.push(result);
    return chainMaker;
  },

  removeLink(position) {
    if((position > 0) && (position === parseInt(position)) && (position <= this.arr.length))
    {
      chainMaker.arr.splice(position -1, 1);
      return chainMaker;
    }
    else 
    {
      chainMaker.arr = [];
      throw Error;
    }
  },
  
  reverseChain() {
    chainMaker.arr.reverse();
    return chainMaker;
  },

  finishChain() {
    let result = this.arr.join("~~");
    chainMaker.arr = [];
    return result;
  }
};

module.exports = chainMaker;