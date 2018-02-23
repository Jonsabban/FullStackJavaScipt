interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    landLine?: string;
}

function personLogger(person: IPerson) {
    const str = `
    ***********************************
    ID:     ${person.id}
    Name:   ${person.firstName} ${person.lastName}
    Phone:  ${person.landLine}
    Email:  ${person.email}
    ***********************************
    `
    console.log(str);
}
let p1:IPerson = {id:1, firstName:"SUPER",lastName:"HOT",email:"totalreal@email.comma"};
personLogger(p1);
