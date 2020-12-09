//Build an HTML Heading Generator Function in JavaScript//

//title
//type of Heading

//headingGenerator('Hi there, 1) <h1>Hi there</h1>


function headingGenerator(title, type)
{if(type <= 6 && type > 0) {
  return `<h${type}>${title}</h${type}>`
 } else {
   return "Enter a tag between 1 and 6"
 }
}

console.log(headingGenerator("greetings weary traveler", 1))

console.log(headingGenerator("howdy", 5))

console.log(headingGenerator("howdy", 7))