"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // -notice we can still create a function just like in interface
    getReelTime() {
        // -some complex calculation
        return 8;
    }
}
// -notice when we add the word abstract, it now  became error
// -when we create abstract class we can't create an object, it is like interface a blueprint
// -another difference from interface is when we make interface as blueprint in class we use the word implement while an abstract we use extends
// - also to initialize an object we use the class that extends it. (in the example we use the Instagram instead of TakePhot)
// const test =  new TakePhoto("test", "Test")
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        // -we need to call super so we can use the variables inside the constructor
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    sepia() {
        console.log("sepai");
    }
}
const int = new Instagram("test", "Test", 8);
int.getReelTime();
