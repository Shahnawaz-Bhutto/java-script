//  let obj={
//     name :["shahnawaz", "shanu", "bhutto", "ali", "ahmed"],
//     college:"uswa",
//     block:{
//         primary:["red","blue","green","yellow","orange"],
//         ssc:["red","blue","green","yellow","orange"],
//         hssc:["red","blue","green"]
//     }
// }
// console.log(obj);

function name(name="shahnawaz bhutto"){
    console.log("hello", name)
}
name()
name("shanu")

function Person(name, age) {
this.name = name;
this.age = age;
}
const user = new Person("shahnawaz", 17);
console.log(user.name); 
console.log(user.age);
