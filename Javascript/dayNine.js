// Function using JS to convert a given numver into an array of digits. //

// //1st Solution//

// const numToArray = (number) => {
//   let array = number.toString().split("");
//   	return array.map(i => parseInt(i));
// }

// console.log(numToArray(123456));
// console.log(numToArray(5432));

// //2nd Solution//
// function numberToArray(num) {
//   return [...`${num}`].map(i => parseInt(i))
// }
// console.log(numberToArray(12345))

// How to Run JavaScript Scripts in the Browser Console //

// function fullName(first, last) {
//   return `${first} ${last}`;
// }

// fullName('Kristine', 'Hudgens');


// newFullName = (first, last) => {
//   return `${first} ${last}`;
// }

// newFullName('Kristine', 'Hudgens');

// // Comparison of Chrome's Command Line API vs Vanilla JavaScript //

// // Source page: http://www.dailysmarty.com/

// // Console with Command Line API / Firebug
// $('.image-item')
// $('.image-item').first // returns function
// $('.image-item').first()
// $('.image-item').first().hide()

// // Compared with
// document.getElementsByClassName('post-item-wrapper')[0].style.display = 'none';

//How to Process JavaScript from a File in the Browser//

// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>
// </head>
// <body>
//   <h1>Hi there</h1>
// </body>
// <script>
//   fullName = (first, last) => {
//     return `${first} ${last}`;
//   }

//   alert(fullName('Kristine', 'Hudgens'));
// </script>
// </html>

//How to Create Custom Code Snippets in VS Code//
{
    "Boilerplate": {
        "prefix": "html5",
        "body": [
            "<!DOCTYPE html>",
            "<html lang='en'>",
            "<head>",
            "  <meta charset='UTF-8'>",
            "  <title></title>",
            "</head>",
            "<body>",
            "  $0",
            "</body>",
            "</html>"
        ],
        "description": "Generates HTML5 Boilerplate"
    },
    "Bullets": {
        "prefix": "bullets",
        "body": [
            "<ul>",
            "  <li>$1</li>",
            "</ul>"
        ],
        "description": "Adds bullet point list to HTML file"
    }
}


{
    "Print to console": {
        "prefix": "log",
        "body": [
            "console.log('$1');",
            "$2"
        ],
        "description": "Log output to console"
    }
}