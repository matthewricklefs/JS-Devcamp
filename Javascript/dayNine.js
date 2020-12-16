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
// {
//     "Boilerplate": {
//         "prefix": "html5",
//         "body": [
//             "<!DOCTYPE html>",
//             "<html lang='en'>",
//             "<head>",
//             "  <meta charset='UTF-8'>",
//             "  <title></title>",
//             "</head>",
//             "<body>",
//             "  $0",
//             "</body>",
//             "</html>"
//         ],
//         "description": "Generates HTML5 Boilerplate"
//     },
//     "Bullets": {
//         "prefix": "bullets",
//         "body": [
//             "<ul>",
//             "  <li>$1</li>",
//             "</ul>"
//         ],
//         "description": "Adds bullet point list to HTML file"
//     }
// }


// {
//     "Print to console": {
//         "prefix": "log",
//         "body": [
//             "console.log('$1');",
//             "$2"
//         ],
//         "description": "Log output to console"
//     }
// }

// Build a Pretty Price Method in JavaScript //

//First Solution//

//define function that takes in two arguments
// const prettyPrice = (grossPrice, extension) => {
//   // return parseInt
//   return parseInt(grossPrice) + extension

// }
// console.log(prettyPrice(2.25, .90))

// //Second Solution//

// const prettyPrice = (grossPrice, extension) => {
//   if (Number.isInteger(extension)) {
//     extension = extension * 0.01;
//   }
//   return Math.floor(grossPrice) + extension;
// };

// prettyPrice(2.2, 0.95); //?
// prettyPrice(2.2, 95); //?

// Overview of the DOM //

// const user = {
//   name: 'Kristine',
//   email: 'kristine@devcamp.com',
//   favorites: [
//     'Chipotle',
//     'Chik fil a'
//   ]
// }

// user.email
// user.favorites[1]

// document

// document.location.href

// // On dailysmarty
// document.location.protocol

// // On wsj
// document.location.protocol

// document.body.parentElement

// document.getElementsByClassName('topics')

// document.getElementsByClassName('topics')[2]

// document.getElementsByClassName('topics')[2].children

// document.getElementsByClassName('topics')[2].children.length

// document.getElementsByClassName('topics')[2].children[0].text


// How to Add and Remove Classes in Vanilla JS //

// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>
// </head>

// <style>
//   .activeHeading {
//     color: firebrick;
//     font-size: 2em;
//     cursor: pointer;
//   }
//   .nonActiveHeading {
//     color: cornflowerblue;
//     font-size: 4em;
//     cursor: pointer;
//   }
// </style>
// <body>

//   <div id="mainHeading" class="activeHeading">
//     Hi there
//   </div>

// </body>

// <script>
//   const heading = document.getElementById('mainHeading');
//   heading.onclick = () => {
//     if (heading.classList.contains('activeHeading')) {
//       heading.classList.remove('activeHeading');
//       heading.classList.add('nonActiveHeading');
//     } else {
//       heading.classList.add('activeHeading');
//       heading.classList.remove('nonActiveHeading');
//     };
//   }


//   heading.onclick = () => {
//     if (heading.classList.contains('activeHeading')) {
//       heading.className = 'nonActiveHeading';
//     } else {
//       heading.className = 'activeHeading';
//     };
//   }
// </script>
// </html>

// Overview of JS Query Selectors //

// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>

//   <style>
//     .hideElement {
//       visibility: hidden;
//     }

//     .showElement {
//       display: block;
//     }
//   </style>
// </head>
// <body>
//   <div class="widget showElement">
//     <div class="mainHeading">
//       <h1>Hi there</h1>
//     </div>

//     <div class="subHeading">
//       My Amazing subheading...
//     </div>

//   </div>
//   <button onclick="contentToggle()">Toggle Content</button>
// </body>
// <script>
//   // const mainHeading = document.querySelector('.mainHeading');
//   // const headings = document.querySelectorAll('div');
//   const widget = document.querySelector('.widget');

//   function contentToggle() {
//     if (widget.classList.contains('showElement')) {
//       widget.classList.remove('showElement');
//       widget.classList.add('hideElement');
//     } else {
//       widget.classList.remove('hideElement');
//       widget.classList.add('showElement');
//     }
//   }

//   // function contentToggle() {
//   //   console.log(headings);
//   //   headings.forEach((heading) => {
//   //     if (heading.classList.contains('showElement')) {
//   //       heading.classList.remove('showElement');
//   //       heading.classList.add('hideElement');
//   //     } else {
//   //       heading.classList.remove('hideElement');
//   //       heading.classList.add('showElement');
//   //     }
//   //   });
//   // }
// </script>
// </html>

// Guide to JavaScript Event Listeners //

// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>
// </head>

// <style>
//   img {
//     width: 400px;
//   }
//   .container {
//     position: relative;
//     text-align: center;
//     color: white;
//   }
//   .show-img-overlay {
//     position: relative;
//     bottom: 60px;
//     font-size: 21px;
//     font-family: Arial, Helvetica, sans-serif;
//   }
//   .hide-img-overlay {
//     position: relative;
//     bottom: 60px;
//     font-size: 21px;
//     color: transparent;
//   }
// </style>
// <body>

//   <div class="container">
//     <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/laptop.jpg" class="site-img" alt="Laptop">
//     <div class="hide-img-overlay">Image Description</div>
//   </div>

//   <div class="container">
//     <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/another-laptop.jpg" class="site-img" alt="Laptop">
//     <div class="hide-img-overlay">Some Other Image Description</div>
//   </div>

// </body>

// <script>
//   const img = document.getElementsByClassName('site-img')[0];
//   img.addEventListener('click', (e) => {
//     debugger;
//   });
//   const imgs = document.querySelectorAll('.site-img');
//   imgs.forEach(img => {
//     img.addEventListener('mouseover', (event) => {
//       const captionElement = event.target.parentElement.children[1];
//       captionElement.className = 'show-img-overlay';
//     });
//   });
//   imgs.forEach(img => {
//     img.addEventListener('mouseout', (event) => {
//       const captionElement = event.target.parentElement.children[1];
//       captionElement.className = 'hide-img-overlay';
//     });
//   });
// </script>
// </html>


// Inline onclick vs addEventListener // 

// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>
// </head>

// <body>
//   <div id="dateComponent"></div>
//   <button id="dateBtn">Click for Date</button>
//   <!-- <button onclick="renderDate()">Click for Date</button> -->
// </body>

// <script>
//   const dateElement = document.getElementById('dateComponent');
//   const dateBtn = document.getElementById('dateBtn');
//   // renderDate = () => {
//   //   dateElement.innerHTML = Date();
//   // }
//   dateBtn.addEventListener('click', (event) => {
//     dateElement.innerHTML = Date();
//   });
// </script>
// </html>

// How to Add and Remove CSS Styles in Vanilla JavaScript //

// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>

//   <style>
//     img {
//       width: 400px;
//     }
//     .site-img {
//       border: 0px 40px 0px 0px solid transparent;
//     }
//   </style>
// </head>
// <body>
//   <div class='container'>
//     <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/laptop.jpg" class="site-img" alt="Laptop">
//   </div>
// </body>

// <script>
//   const laptop = document.querySelector('.site-img');

//   laptop.addEventListener('mouseover', (e) => {
//     e.target.style.borderRight = '40px solid red';
//   });

//   laptop.addEventListener('mouseout', (e) => {
//     e.target.style.borderRight = '40px solid transparent';
//   });
// </script>
// </html>

// How to Use JavaScript's Toggle Function //

// <!DOCTYPE html>
// <html lang='en'>
// <head>
//   <meta charset='UTF-8'>
//   <title></title>
// </head>

// <style>
//   .hidden {
//     display: none;
//   }
// </style>
// <body>

//   <button id="toggleBtn">Toggle Me</button>

//   <div id="mainHeading" class="hidden">
//     Hi there
//   </div>

// </body>

// <script>
//   const heading = document.getElementById('mainHeading');
//   const btn = document.getElementById('toggleBtn');
//   btn.addEventListener('click', (e) => {
//     heading.classList.toggle('hidden');
//   });
// </script>
// </html>

// How to Build a Character Countdown Function in JavaScript //

<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title></title>
</head>
<body>
  <input type="text" class="msgInput">

  <div>
    Characters left <span class="msgCounter"></span>
  </div>
</body>

<script>
  const getCurrentContentLength = (content, max) => {
    const maxLength = max;
    if (content.length > maxLength) {
      return false;
    } else {
      return true;
    }
  }
  const msgInput = document.querySelector('.msgInput');
  const counter = document.querySelector('.msgCounter');
  const max = 20;
  // Nope
  // msgInput.addEventListener('keyup', (e) => {
  //   console.log(e);
  // });
  msgInput.onkeyup = function() {
    counter.innerHTML = max - this.value.length;
    if(!getCurrentContentLength(this.value, (max - 1))) {
      msgInput.disabled = true;
    }
  }
</script>
</html>