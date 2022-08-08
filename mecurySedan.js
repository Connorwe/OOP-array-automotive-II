//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle   //imports vehicle.js


class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);       //parent class constructer
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {                
        if (this.passenger < this.maxPassengers) {                  //more than 5 passengers and car doesn't have enough space
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

       start() {
        if (this.fuel > 0) {            
            console.log("engine started.");         // engine starts if fuel above 0 and console logs 
            return this.started == true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService == true
            return this.scheduleService;                       
        }
    }


}

let myCar = new Car('mercury', 'rad_sedan', '2002', 'red', 5000)   //refers to make, model, year, and mileage up top

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()
console.log(myCar)