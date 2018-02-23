let isDone: boolean = true;
isDone = false;
let count: number = 1;
count = 6;
let user: string = "some kind of arsehole";
let msg: string = `
****************************
Are you ${user}?
****************************

`;

console.log(msg);

let numbers: number[] = [1, 5, 7, 3, 2, 8, 10];
let numbers2: Array<Number> = [];
numbers2.push(2);

let numberString: any = 1;
numberString = `støp`;

function logInfo(info: any):void {
    console.log(info);
}
console.log(logInfo(5));
//Enums
let skill = 0;
enum skills {Low, Medium, High, Expert}
if( skill === skills.Low) {
    //do something
};
if( skill === skills.High) {
    //do something
};