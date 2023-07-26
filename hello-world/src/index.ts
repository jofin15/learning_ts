let sales: number=123456;
let course:string = "Angular";
let is_pulished:boolean = true;

let level;
level = 10;
level = "a";


//note :- avoid using "any" type as much as possible

function render(document:any){
console.log(document);

}


//Arrays
let arr:number[] = [1,2,3,4,5,6];




//tuples:- its a fixed length array where each element is of a specific type .Also use tuples when have only 2 elements (key and value).
let user:[number,string]=[1,"jofin"]
let user2:[number,string]=[2,"jomin"]
let user3:[number,string]=[3,"johnson"]
let user4:[number,string]=[4,"james"]

user.push(7,"james");
console.log(user);

// let lastIndexOf =user[1].lastIndexOf("n");
// console.log(lastIndexOf);
