function upperCase(string){ //Capitalises the first letter of a string passes and returns the whole string. 
   x = string.charAt(0).toUpperCase();
   return x + string.substring(1,string.length)
}
function lastLetter(string){ // returns last letter
    return string.charAt(string.length-1); //The -1 is important because string characters are zero-indexed.
}
function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
  }
console.log(upperCase('hello'));
console.log(lastLetter('Wow, I have done it.'));  
run();