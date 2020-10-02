/* 1 */
/* a */
var names = ["diane", "anne", "millie", "bent"];
 function filterByLetter(arr) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf('a') !== -1
  })
}

console.log(filterByLetter(names));
  /* b */
  function reverseString(str) {
    return str.split("").reverse().join("");
}
function reverseAll(){
var reversed=names.map(name=>{
    return reverseString(name);
});
return reversed;
}
console.log(reverseAll());
/* 2 */

function myFilter(array, callback){
    return callback(array);
}
console.log(myFilter(names,filterByLetter));

function myMap(array, callback){
  return callback(array);
}
console.log(myFilter(names,reverseAll));

/** 3/ */
/* a */
var numbers = [1, 3, 5, 10, 11];

var n=0;
function changenumbers(array){
  
   var numbers=array.map(number=>{
     n++;
    if(n<(array.length)){
      return (number+array[n]);
    }
    else{
      return number;
    }});
  return numbers;
}
console.log(myMap(numbers,changenumbers));
/* b */
var names2=["Matti","Nikolaj","Vibeke","Mathias"];

function getA(){
  var s="";
names2.map(name=>{
s += "<a href=””>"+name+"</a>"
});
return s;
}
var strr="<nav>"+getA()+"</nav>";

console.log(strr);
/* c */
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];
function makeTable(){
  var s =persons.map(human=>"<tr><th>"+human.name+"</th><th>"+human.name+"</th></tr>").join("");
  return "<table>"+s+"</table>";
}
console.log("make table");
console.log(makeTable());
/*4*/
var all= ["Hassan", "Peter", "Carla", "Boline"];
var strr2=all.join("#");
console.log(strr2);
/* b*/
var numbers2 = [2, 3, 67, 33]; 

const sum = numbers2.reduce((total, amount) => total + amount); 
console.log(sum);

var members = [
  {name : "Peter", age: 18},
  {name : "Jan", age: 35},
  {name : "Janne", age: 25},
  {name : "Martin", age: 22}];
/*c*/ 
    function getAverageAge(members) {
    return members.reduce((ac, member) => ac + member.age, 0) / members.length;
    }
  console.log(getAverageAge(members));

/**d */
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

var count = function(array) {
  return votes.reduce(function(counter, item) {
      var p = (item);
      counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
      return counter;
  }, {})
}

console.log(count(votes));


  /**5 */
  /**a 
   * Man får kun funtions signaturen og derfor kan den ikke blive sat.
  */

  /**b
   * same reason as before
  
   */

  // Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
console.log(counter);

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  getInfo : function() {
    return this.firstName + " " + this.lastName;
  },
  setName : function(name) {
    this.firstName=name;
    return this.firstName;
  },
  setLName : function(name) {
    this.lastName=name;
    return this.lastName;
  }
}

console.log(person.getInfo());
console.log(person.setName("Bob"));
console.log(person.setLName("Bent"));
console.log(person.getInfo());
