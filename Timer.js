let timer = class {
    constructor(startTime,endTime,timeTaken){
        this.startTime = startTime;
        this.endTime = endTime;
        this.timeTaken = timeTaken;
    }

    getStartTime(){
        let startTime = new Date().getTime();
        return startTime;
    };
    getEndTime(){
        let endTime = new Date().getTime();
        return endTime;
    };
    timeTakenInMinutesSeconds (startTime,endTime){
        let milliseconds = endTime - startTime;
        milliseconds = 1000*Math.round(milliseconds/1000);
        let d = new Date(milliseconds);
    
        console.log( d.getUTCMinutes() + ' minutes ' + d.getUTCSeconds() + " seconds");
    }; 
};

module.exports.timerClass = timer;