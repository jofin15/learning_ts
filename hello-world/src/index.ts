// let sales: number=123456;
// let course:string = "Angular";
// let is_pulished:boolean = true;

// let level;
// level = 10;
// level = "a";


//note :- avoid using "any" type as much as possible

// function render(document:any){
// console.log(document);

// }


//Arrays
// let arr:number[] = [1,2,3,4,5,6];




//tuples:- its a fixed length array where each element is of a specific type .Also use tuples when have only 2 elements (key and value).
// let user:[number,string]=[1,"jofin"]
// let user2:[number,string]=[2,"jomin"]
// let user3:[number,string]=[3,"johnson"]
// let user4:[number,string]=[4,"james"]

// user.push(7,"james");
// console.log(user);

// let lastIndexOf =user[1].lastIndexOf("n");
// console.log(lastIndexOf);







//use of enums
// const small=1;
// const medium=2;
// const large=3;

//instead of declaring const all the time we can use enum
// enum Size{
//     small=1,
//     medium=2,
//     large=3
// }

// //you can access enum values by using this below method
// let mySize:Size=Size.medium;
// console.log(mySize);

//but if you simply write const keyword before enum keyword ,the compiler will generate more optimized code

// const enum Size{
//     small=1,
//     medium=2,
//     large=3
// }

// let mySize:Size=Size.medium;
// console.log(mySize);






//functiONS
function calculateTax(income:number):number{
    if(income<50000){
        return 0
    }
    else{
        return 1
    }
}

