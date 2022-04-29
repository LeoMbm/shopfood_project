// LOADER

// const loader = document.querySelector('.loader');
// window.addEventListener('load', () => {
//     loader.classList.add('fondu-out');
// })

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  let fooditem=[
    {
        name :'Chicken Burgers',
        img :'./img/chicen.jpeg',
        note:4.6,
        category: 'Américain',
        genre:'chicken',
        ingredients:'poulet, tomate, oignon, salade, avocat',
        preparationtime:'10-15 min',
        prix:'10€',
    },
    {
        name :'Ultimate Bacon King',
        img :'./img/bacon king.jpeg',
        note:4.3,
        category: 'Américain',
        genre:'meat',
        ingredients:'minced steak, lots of bacon, cheese, special sauce',
        preparationtime:'10-15 min',
        prix:'10€',
    },
    {
        name :'Tacos Grec',
        img :'./img/tacos-a-la-grecque.jpg',
        note:4.4,
        category: 'Latino',
        genre:'chicken',
        ingredients:'ground pork, salad, olive, onion, pita sauce',
        preparationtime:'10 min',
        prix:'8€',
    },
    {
        name :'Supreme Tacos',
        img :'./img/tacosmex.jpeg',
        note: 4.5,
        category: 'Latino',
        genre:'meat',
        ingredients:'chopped beef, tomato, avocado, pepper, lemon worms, onion',
        preparationtime:'15 min',
        prix:'12€',
    },
    {
        name :'Dürum Piment',
        img :'./img/durump.jpeg',
        note:4.2,
        category: 'Turc',
        genre:'meat',
        ingredients:'veal, turkey, cumin, chilli, tomatoes, onion, chives',
        preparationtime:'15 min',
        prix:'11€',
    },
    {
        name :'Dürum Chicken',
        img :'./img/dour.jpeg',
        note:4.3,
        category: 'Turc',
        genre:'chicken',
        ingredients:'chicken, onion, pepper, garlic, tomato, parsley',
        preparationtime:'10 min',
        prix:'11€',
    },
    {
        name :'Salade Cesar',
        img :'./img/slac.jpeg',
        note:4.1,
        category: 'Américain',
        genre:'salad',
        ingredients:'lettuce, chicken, bread, cream, anchovies, parmesan, caper, garlic',
        preparationtime:'10 min',
        prix:'8€',
    },
    {
        name :'Salade Quinoa',
        img :'./img/quinoa.jpg',
        note:4.3,
        category: 'Américain',
        genre:'salad',
        ingredients:'quinoa, bell pepper, red cabbage, carrots, peanut butter, ginger',
        preparationtime:'10 min',
        prix:'13€',

    },
    {

        name :'Nouilles Poulet',
        img :'./img/nouillep.jpeg',
        note:4.2,
        category: 'Asiatique',
        genre:'chicken',
        ingredients:'chicken, broccoli, carrots, onion, garlic, soy sauce',
        preparationtime:'10-15 min',
        prix:'13€',
    },
    {

        name :'Nouilles Boeuf',
        img :'./img/nouillesb.jpeg',
        note:4.8,
        category: 'Asiatique',
        genre:'meat',
        ingredients:'beef, beans, ginger, soy sauce, Chinese cabbage',
        preparationtime:'10-15 min',
        prix:'11€',
    },
    {

        name :'Plateau Japan Roll Mix',
        img :'./img/rols1.png',
        note:4.2,
        category: 'Asiatique',
        genre:'meat',
        ingredients:'nori sheets, sesame, rice, wasabi, avocado, cucumber, crab, soy sauce',
        preparationtime:'15 min',
        prix:'20€',
    },
    {

        name :'Pizza 4 Fromages',
        img :'./img/pizza4.jpg',
        note:4.5,
        category: 'Italien',
        genre:'vegetarian',
        ingredients:'tomato, cheddar, county, blue cheese, mozzarella, basil',
        preparationtime:'20 min',
        prix:'15€',
    },
    {

        name :'Pizza Calzone',
        img :'./img/calzo.jpg',
        note:4.7,
        category: 'Italien',
        genre:'meat',
        ingredients:'tomato, gruyère, oregano, ham, shallot, mozzarella, olive',
        preparationtime:'20 min',
        prix:'15€',
    },
    {

        name :'Pâtes Carbonara',
        img :'./img/pattec.jpeg',
        note:4.8,
        category: 'Italien',
        genre:'meat',
        ingredients:'cream, onion, bacon, egg, cheese',
        preparationtime:'15 min',
        prix:'12€',
    },
    {

        name :'Pâtes Bolognaise',
        img :'./img/patteb.jpg',
        note:4.7,
        category: 'Italien',
        genre:'meat',
        ingredients:'tomato, onion, carrot, celery, parsley, ground beef',
        preparationtime:'15 min',
        prix:'14€',

    },
    {

        name :'Boulette Frite',
        img :'./img/boulet.jpg',
        note:3.9,
        category: 'Belge',
        genre:'meat',
        ingredients:'minced beef, onion, parsley, eggs, cork syrup, tomato, fried',
        preparationtime:'15 min',
        prix:'15€',
    },
    {

        name :'Calamar à la Romaine',
        img :'./img/calamar.jpg',
        note:4.3,
        category: 'Italien',
        genre:'crustacean',
        ingredients:'squid, egg, lemon, onion,',
        preparationtime:'10 min',
        prix:'10€',
    },
    {

        name :'Plateau de Fruit de mer',
        img :'./img/plateau.jpg',
        note:4.6,
        category: 'Italien',
        genre:'crustacean',
        ingredients:'winkles, whelks, clams, oysters, cakes, crabs, shrimp',
        preparationtime:'25 min',
        prix:'40€',
    },
    {

        name :'Ramen Chicken',
        img :'./img/ramen.jpg',
        note:4.7,
        category: 'Asiatique',
        genre:'chicken',
        ingredients:'chicken, with, sesame, onion, soy, chicken broth',
        preparationtime:'10-15min',
        prix:'12€',
    },
    {

        name :'Spicy Ramen',
        img :'./img/ramenp.jpg',
        note:4.5,
        category: 'Asiatique',
        genre:'meat',
        ingredients:'beef, soy, onion, shiitake, miso, sesame, garlic, chilli, vegetable broth',
        preparationtime:'10-15 min',
        prix:'14€',
    },

]

let nationalityFood=[
    {

        category: 'Américain'
    },

    {

        category: 'Asiatique'
    },


    {

        category: 'Belge'
    },

    {

        category: 'Espagnol'
    },

    {

        category: 'Italien'
    },

    {

        category: 'Latino'
    },

    {


        category: 'Turc'
    }
]

let shoppingCart = [];




// SCROLL HORIZONTAL CATEGORY 

let currentScrollPosition = 0;
let scrollAmount = 320;
const itemContainer = document.querySelector('.item-container');
const wrapper = document.querySelector('.wrapper-topCat');
let maxScroll = itemContainer.offsetWidth + wrapper.offsetWidth;




function scrollHorizontally(value) {
    currentScrollPosition += (value * scrollAmount);
    console.log(maxScroll);

    // PROBLEME A CETTE CONDITION CA NE SCROLL PLUS

    if(currentScrollPosition > 0){
        currentScrollPosition = 0;
    }
 
    if(currentScrollPosition > maxScroll){
        currentScrollPosition = maxScroll;
    }

    itemContainer.style.left = currentScrollPosition + "px";

}

// DOM DYNAMIC HTML CONTENT
const sectionCategory = document.querySelector('#category');
const topCategory = document.querySelector('top-category');
const categoryContainer = document.querySelector('.category-container');
const grid = document.querySelector('.grid-category');


function category(){
    
    for (const food of nationalityFood) {

        let btnItem = document.createElement('button')
        btnItem.className = 'item';
        btnItem.innerHTML = food.category
        itemContainer.appendChild(btnItem);
        // console.log(food.category);
    }
}

category();

function item(){

    for (const item of fooditem) {

        let foodCategory = document.createElement('article');
        foodCategory.className = 'food-category';
        let nameOverlay = document.createElement('h1');
        nameOverlay.className ='name-overlay';
        nameOverlay.innerHTML = item.name;
        foodCategory.style.backgroundImage = 'url('+ item.img +')';

        
        categoryContainer.appendChild(grid)
        grid.appendChild(foodCategory);
   
        foodCategory.append(nameOverlay);
        
        
        
    }
}

item();

function sortnote() {
    fooditem.sort( function(a, b) {
        if (a.note > b.note) {
            return 1;
        } else if (a.note < b.note) {
            return -1;
        } else return 0
    }
    )
}

function sortname() {
    fooditem.sort( function(a, b) {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else return 0
    }
    )
}

function sortName() {
  let list, i, switching, b, shouldSwitch;
  list = document.getElementById("dishes");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("article");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function sortNote() {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById("dishes");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("article");
      console.log(b)
      // Loop through all list items:
      for (i = 0; i < fooditem; i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Check if the next item should
        switch place with the current item: */
        sortnote()
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
