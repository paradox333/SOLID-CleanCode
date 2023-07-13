import { Tesla, Audi, Toyota, Honda, Car } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Car[] ) => {
        
        cars.forEach( car => {
            console.log( car.getName(), car.getNumberOfTeslaSeats());
        })
    }
    
    const cars = [
        new Car(7, 'Tesla'),
        new Car(2, 'Audi'),
        new Car(5, 'Toyota'),
        new Car(5, 'Honda'),
        new Car(2999, 'Alfa Romeo')
    ];


    printCarSeats( cars );

})();

