// prompt('hello')
// alert('hello')

//Menu Choices Entree and Sides
const breakfastMenu = {
  entree: {
    'Pancakes': 7,
    'Lumberjack Breakfast': 10,
    'Avocado Toast': 8
  }
  sides: {
    'Two Eggs': 4,
    'Hashbrowns': 4,
    'Toast': 2
  }
}

const lunchMenu = {
  entree: {
    'Muna Telt': 11,
    'Grilled Sneez': 10 ,
  }
  sides: {
    'Moup': 5,
    'Snalad': 4,
    'Fryz': 5
  }
}
const dinnerMenu = {
  entree: {
    "Fish-n-Pebbles!": 16,
    "Burger Baby!": 13,
    "Filet Humignon!": 21,
  }

  sides: {
    'Friggity Fries': 6,
    "Snac-n-Sneeze": 5,
    'Mixed-Leggies': 7
  } 
}



// JS Menu Functionality linked to HTML button//
// function renderMenu() {
//   for (item in menu) {

//     const newDiv = document.createElement("div")
//     const divText = document.createTextNode(item)
//     const priceText = document.createTextNode(menu[item])

    newDiv.appendChild(divText)
    newDiv.appendChild(priceText)
    newDiv.classList.add("menu-item")
    newDiv.onclick = "renderPrice()"



//     document.getElementById("content").appendChild(newDiv)

//   }
// }

// renderMenu()

// // document.getElementById("content").addEventListener


// const menuChoice = prompt("what menu would you like to see?")


//Menu Prompt Selectors
function start(menu){
  switch(menu.toLowerCase().trim()){
    case "breakfast":
      renderBreakfast()
      break;
    case "lunch":
      renderLunch()
      break;
    case "dinner":
      renderDinner()
      break;
    default:
      alert("try again dummy...")
      start menu() 
  }
}

let menuChoice:


function selectMenu(){
  const inputField = document.getElementById("menu-Choices
  ")
}