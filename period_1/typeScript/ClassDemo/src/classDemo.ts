class Person {
    private static nextId: number = 1000;
    public readonly id: number;
    private name: string;

    constructor(name: string, private email: string) {
        this.id = Person.nextId++;
        this.name = name;
    }

    get getName():string {
        return this.name
    }
    get getId():number {
        return this.id
    }
    set setName(name:string) {
        this.name = name
    }
}

let person1: Person = new Person("Ficko","Ficko@Fake.email");
let person2: Person = new Person("Ficko","Ficko@Fake.email");
let person3: Person = new Person("Ficko","Ficko@Fake.email");
console.log(person1);
console.log(person3.getId);

