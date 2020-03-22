module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                let middleCount = 1;
                middleCount += this.calculateDepth(arr[i]);
                if(count < middleCount) count = middleCount;
            }
        }
        return count;
    }
}
