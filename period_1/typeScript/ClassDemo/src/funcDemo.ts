function sayHello(firstName: string, lastName: string, role?: string) {
    let temp = `Hello ${firstName} ${lastName}! `
    temp += (role) ? "How did you manage to become a " + role + "? " : "";
    console.log(temp);
}
/*
sayHello("Ficko", "Fickovic");
sayHello("Toby", "Fickovic", " a swell guy");
*/
class cPerson {
    private fName: string;
    private lName: string;
    constructor(private fName: string, private lName: string) {
        this.fName = fName;
        this.lName = lName;
    }
    sayHelloEventually() {
        const self = this;
        setTimeout(function () {
           console.log(`Hi ${self.fName}`);
        })
    }
    sayHelloV2() {
        setTimeout(() => {
            console.log(`Hi ${this.fName}`);
        })
    }
}

let p = new cPerson("Ficko", "Fickovic");
p.sayHelloEventually();
p.sayHelloV2();