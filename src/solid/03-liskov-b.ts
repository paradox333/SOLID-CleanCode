class CarFeatures {
    public numberOfSeats: number;
    public name: string

    constructor(numberOfSeats: number, name: string){
        this.numberOfSeats = numberOfSeats;
        this.name = name;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
    getName() {
        return this.name;
    }
}

export class Car {

    public features: CarFeatures;

    constructor( numberOfSeats: number, name: string) {
        this.features = new CarFeatures(numberOfSeats,  name )
    }

    getNumberOfTeslaSeats() {
        return this.features.getNumberOfSeats();
    }

    getName() {
        return this.features.getName();
    }
}



export class Tesla {

    public features: CarFeatures;

    constructor( numberOfSeats: number) {
        this.features = new CarFeatures(numberOfSeats,  'Tesla'  )
    }

    getNumberOfTeslaSeats() {
        return this.features.getNumberOfSeats();
    }

    getName() {
        return this.features.getName();
    }
}

export class Audi {

    public features: CarFeatures;

    constructor( numberOfSeats: number) {
        this.features = new CarFeatures(numberOfSeats,  'Audi'  )
    }

    getNumberOfTeslaSeats() {
        return this.features.getNumberOfSeats();
    }

    getName() {
        return this.features.getName();
    }
}

export class Toyota {

    public features: CarFeatures;

    constructor( numberOfSeats: number) {
        this.features = new CarFeatures(numberOfSeats,  'Toyota'  )
    }

    getNumberOfTeslaSeats() {
        return this.features.getNumberOfSeats();
    }

    getName() {
        return this.features.getName();
    }
}

export class Honda {

    public features: CarFeatures;

    constructor( numberOfSeats: number) {
        this.features = new CarFeatures(numberOfSeats,  'Honda'  )
    }

    getNumberOfTeslaSeats() {
        return this.features.getNumberOfSeats();
    }

    getName() {
        return this.features.getName();
    }
}