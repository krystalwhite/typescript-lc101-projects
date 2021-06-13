import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket implements Payload {
    name : string;
    totalCapacityKg : number;
    massKg: number;

    constructor(name : string, totalCapacityKg : number, cargoItems : string[], astronauts : string[]) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
}