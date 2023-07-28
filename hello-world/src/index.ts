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
// function calculateTax(income:number,taxYear:number=2022):number{
//     if(taxYear<2022){
//         return income*1.12
//     }
//     else{
//         return income*1.13
//     }
// }

// calculateTax(10000)





//objects
/*in js objects are dynamic. In js you can dynamically change the value of the element . Also you can add new elements inside
the object dynammically .For example
*/

// let employee={id:1}
// employee.name="jofin"

//But in typescript you cant do that 

// let employee={id:1}
// employee.name="jofin"  //we are getting an error

// let employee: { //defining type of the all the element in that object
//     readonly id: number,   //readonly allows you to not change that specific elements value
//     name: string,
//     isLoggedIn: boolean,
//     retire: (date: Date) => void   //if you want to define function and its type
// } = { //assigning value to all the element in the object
//     id: 1,
//     name: "jofin",
//     isLoggedIn: true,
//     retire: (date) => {
//         console.log(date);

//     }
// }


// employee.isLoggedIn = false
// // employee.id=20;  //you cant assign value because it is readonly
// console.log(employee);
// // employee.retire()




//using type alias
//in the above code , it has following challenges. 1. The object becomes lengthy. 2.its still follow dry principle (dont repeat your code). So we will be using Type Aliases

// type Employee={
//     readonly id: number,   //readonly allows you to not change that specific elements value
//     name: string,
//     isLoggedIn: boolean,
//     retire: (date: Date) => void   //if you want to define function and its type

// }

// let employee: Employee = { //assigning value to all the element in the object
//     id: 1,
//     name: "jofin",
//     isLoggedIn: true,
//     retire: (date) => {
//         console.log(date);

//     }
// }




//Union Types
//what if you have a parameter who could have two different types in a function. and you want to use them both 
//we will use Unio type

// function kgToLbs(weight:number | string ):number{
// // weight.    => if you use weight alone it will only give you properties which are common to both number and string 


// // so we will be using Narrowing method
// if (typeof weight==="number"){
//     // weight.   // here when you use "weight."" you will see all the number properties 
//     return weight*2

// }else{
//     // weight. //here when you use "weight.", you will see all the string properties
//     return parseInt(weight)*5;
// }
// }

// console.log( 
//     kgToLbs("100")
//  );
//  console.log( 
//     kgToLbs(200)
//  );



//intersection
// let weight:number & string ; //this type represents, an object which is both a number and a string at a same time 

type Draggable ={
    drag:()=>void
}

type Resizable={
    resize:()=>void
}

type UIWidget=Draggable & Resizable;

let textBox:UIWidget={
    drag() {
        
    },
    resize() {
        
    },
}