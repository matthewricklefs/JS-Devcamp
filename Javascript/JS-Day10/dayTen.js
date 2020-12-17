//Guide to Building Shared Behavior with JavaScript Functions
//
// <!DOCTYPE html>
// <html lang='en'>
// <head>

//   <meta charset='UTF-8'>
//   <title></title>

// </head>
// <body>
//     <input type="text" class="msgInput">

//     <div>
//       Characters left <span class="msgCounter">144</span>
//     </div>

//     <hr>

//   <input type="text" class="tagInput">

//   <div>
//     Characters left <span class="tagCounter">144</span>
//   </div>

// </body>

// <script>

//     const msgInput = document.querySelector('.msgInput')
//     const msgCounter = document.querySelector('.msgCounter')
//     const tagInput = document.querySelector('.tagInput')
//     const tagCounter = document.querySelector('.tagCounter')

//     const max = 20

//     // ensure character count
//     const ensureContentLength = (content, max) => {
//         if(content.length > max) {
//             return false;
//         } else {
//             return true;
//         }
//     }


//     const textFieldLengthValidator = (textField, counter, maxCount) => {
//         textField.onkeyup = function () {
//             counter.innerHTML = maxCount - this.value.length;

//             if (!ensureContentLength(this.value, (maxCount - 1)))  {
//                 textField.disabled = true;
//             }
//         }
//     }

//     textFieldLengthValidator(msgInput, msgCounter, 144)
//     textFieldLengthValidator(tagInput, tagCounter, 20)


// </script>

// </html>

// How to Dynamically Create HTML Elements with JavaScript //