const menuContainer = document.querySelector("#menu-container");

// Menu
const menuBreakfast = [
  {
    name: "Egg Benedict",
    price: "25 000",
    url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    desc: "Egg Benedict is a dish consisting of two halves of an English muffin topped with Canadian bacon and poached eggs, and covered with a hollandaise sauce. It is usually served with hash browns or home fries.",
  },
  {
    name: "Oatmeal porridge with cocount milk",
    price: "30 000",
    url: "https://images.unsplash.com/photo-1571748982800-fa51082c2224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    desc: "Oatmeal porridge is a dish made by boiling oatmeal in water or milk. It is often served with sugar, salt, butter, or cream. It is a common breakfast food in many countries.",
  },
  {
    name: "Oatmeal porridge with fruit",
    price: "29 000",
    url: "https://images.unsplash.com/photo-1584970922591-5b91e5f927a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    desc: "Oatmeal porridge is a dish made by boiling oatmeal in water or milk. It is often served with sugar, salt, butter, or cream. It is a common breakfast food in many countries.",
  },
  {
    name: "Chia Pudding",
    price: "33 000",
    url: "https://images.unsplash.com/photo-1618798513386-fedeb5c30d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    desc: "Chia pudding is a pudding made from chia seeds. It is often served as a breakfast food, but can also be served as a dessert. It is often sweetened with honey or maple syrup.",
  },
  {
    name: "Granola with yogurt",
    price: "27 000",
    url: "https://images.unsplash.com/photo-1504708706948-13d6cbba4062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: "Granola is a breakfast cereal made from rolled oats, nuts, seeds, and dried fruit. It is often sweetened with honey or maple syrup. It is often served with yogurt or milk.",
  },
  {
    name: "Parisian Breakfast",
    price: "30 000",
    url: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80",
    desc: "The Parisian breakfast is a breakfast consisting of a croissant, a baguette, a cup of coffee, and a glass of orange juice. It is a common breakfast in France.",
  },
];

const menuOmelettes = [
  {
    name: "Omelette with sausages",
    url: "https://images.unsplash.com/photo-1524182732116-a3ad2034503c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9tZWxldHRlJTIwd2l0aCUyMHNhdXNhZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: "35 000",
    desc: "Omelette with sausages is an omelette with sausages. It is a common breakfast food in many countries.",
  },
  {
    name: "Mix Omelette",
    url: "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80",
    price: "30 000",
    desc: "Mix Omelette is an omelette with a variety of ingredients. It is a common breakfast food in many countries.",
  },
  {
    name: "Classic Omelette",
    url: "https://images.unsplash.com/photo-1640719178276-f322d7364aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "25 000",
    desc: "Classic Omelette is an omelette with cheese. It is a common breakfast food in many countries.",
  },
];

const menuPancakes = [
  {
    name: "Pancakes with berries",
    url: "https://images.unsplash.com/photo-1612182062633-9ff3b3598e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80",
    price: "30 000",
    desc: "Pancakes with berries is a pancake with berries. It is a common breakfast food in many countries.",
  },
];

const menuCrepes = [
  {
    name: "Crepes with banana",
    url: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "35 000",
    desc: "Crepes with banana is a crepe with banana. It is a common breakfast food in many countries.",
  },
  {
    name: "Crepe Normandy",
    url: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "40 000",
    desc: "Crepe Normandy is a crepe with ham, cheese, and egg. It is a common breakfast food in many countries.",
  },
  {
    name: "Crepe with cottage cheese",
    url: "https://images.unsplash.com/photo-1565087170449-fa23854a6100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    price: "30 000",
    desc: "Crepe with cottage cheese is a crepe with cottage cheese. It is a common breakfast food in many countries.",
  },
  {
    name: "Crepe pancakes",
    url: "https://images.unsplash.com/photo-1630362137311-ca837e790e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    price: "32 000",
    desc: "Crepe pancakes is a crepe with pancakes. It is a common breakfast food in many countries.",
  },
  {
    name: "Crepe with chocolate",
    url: "https://images.unsplash.com/photo-1515467837915-15c4777ba46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
    price: "35 000",
    desc: "Crepe with chocolate is a crepe with chocolate. It is a common breakfast food in many countries.",
  },
];

const menuQuiche = [
  {
    name: "Quiche with mushrooms",
    url: "https://images.unsplash.com/photo-1456014673271-90b7fddf2eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    price: "35 000",
    desc: "Quiche with mushrooms is a quiche with mushrooms. It is a common breakfast food in many countries.",
  },
];

const menuSoups = [
  {
    name: "Tomato soup",
    url: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "25 000",
    desc: "Tomato soup is a soup with tomatoes. It is a common breakfast food in many countries.",
  },
  {
    name: "Chicken soup",
    url: "https://images.unsplash.com/photo-1605461682195-9fd4d079a41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    price: "30 000",
    desc: "Chicken soup is a soup with chicken. It is a common breakfast food in many countries.",
  },
  {
    name: "Pumpkin soup",
    url: "https://images.unsplash.com/photo-1649775526935-91de74d38826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "25 000",
    desc: "Pumpkin soup is a soup with pumpkin. It is a common breakfast food in many countries.",
  },
  {
    name: "Lentil soup",
    url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "25 000",
    desc: "Lentil soup is a soup with lentils. It is a common breakfast food in many countries.",
  },
];

const menuSandwiches = [
  {
    name: "Sandwich with chicken",
    url: "https://images.unsplash.com/photo-1627754468549-6ed1a4813a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "25 000",
    desc: "Sandwich with chicken is a sandwich with chicken. It is a common breakfast food in many countries.",
  },
  {
    name: "Sandwich with mashrooms",
    url: "https://images.unsplash.com/photo-1619531038896-deaff53d151a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "45 000",
    desc: "Sandwich with mashrooms is a sandwich with mashrooms. It is a common breakfast food in many countries.",
  },
  {
    name: "Sandwich with cheese",
    url: "https://images.unsplash.com/photo-1621188988909-fbef0a88dc04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "15 000",
    desc: "Sandwich with cheese is a sandwich with cheese. It is a common breakfast food in many countries.",
  },
  {
    name: "Courasant with cheese",
    url: "https://images.unsplash.com/photo-1639667851375-49c6c8c04b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80",
    price: "35 000",
    desc: "Courasant with cheese is a courasant with cheese. It is a common breakfast food in many countries.",
  },
  {
    name: "Sandwich with ham",
    url: "https://images.unsplash.com/photo-1639744093483-86714cd62a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "25 000",
    desc: "Sandwich with ham is a sandwich with ham. It is a common breakfast food in many countries.",
  },
  {
    name: "Sandwich with meat",
    url: "https://images.unsplash.com/photo-1629236055174-3e21cae6fa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "50 000",
    desc: "Sandwich with meat is a sandwich with meat. It is a common breakfast food in many countries.",
  },
];

const menuSalads = [
  {
    name: "Ceaser salad",
    url: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80",
    price: "45 000",
    desc: "Ceaser salad is a salad with ceaser. It is a common breakfast food in many countries.",
  },
  {
    name: "Burrato salad",
    url: "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "35 000",
    desc: "Burrato salad is a salad with burrato. It is a common breakfast food in many countries.",
  },
  {
    name: "Veggie salad",
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "25 000",
    desc: "Veggie salad is a salad with veggie. It is a common breakfast food in many countries.",
  },
  {
    name: "Salad with shrimp",
    url: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80",
    price: "55 000",
    desc: "Salad with shrimp is a salad with shrimp. It is a common breakfast food in many countries.",
  },
];

const menuMainCourse = [
  {
    name: "Chicken Fricasse",
    url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "45 000",
    desc: "Chicken Fricasse is a chicken with fricasse. It is a common breakfast food in many countries.",
  },
  {
    name: "Salmon Blanquette",
    url: "https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "65 000",
    desc: "Salmon Blanquette is a salmon with blanquette. It is a common breakfast food in many countries.",
  },
  {
    name: "Beef Bourguignon",
    url: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "75 000",
    desc: "Beef Bourguignon is a beef with bourguignon. It is a common breakfast food in many countries.",
  },
];

const menuHotDrinks = [
  {
    name: "Cappuccino",
    url: "https://images.unsplash.com/photo-1618207319353-e77a284858e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "25 000",
    desc: "Cappuccino is a coffee with cappuccino. It is a common breakfast food in many countries.",
  },
  {
    name: "Green Matcha Latte",
    url: "https://images.unsplash.com/photo-1450024529642-858b23834369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80",
    price: "25 000",
    desc: "Green Matcha Latte is a coffee with green matcha latte. It is a common breakfast food in many countries.",
  },
  {
    name: "Hot Chocolate",
    url: "https://images.unsplash.com/photo-1600525167183-a3f99f478b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "25 000",
    desc: "Hot Chocolate is a coffee with hot chocolate. It is a common breakfast food in many countries.",
  },
];

const menuCoconutCoffee = [
  {
    name: "Coconut Coffee",
    url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    price: "45 000",
    desc: "Coconut Coffee is a coffee with coconut. It is a common breakfast food in many countries.",
  },
];

const menuFreshJuices = [
  {
    name: "Fresh Juice",
    url: "https://images.unsplash.com/photo-1622597467821-df79dcb4f94d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    price: "25 000",
    desc: "Fresh Juice is a juice with fresh. It is a common breakfast food in many countries.",
  },
  {
    name: "Orange Juice",
    url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "25 000",
    desc: "Orange Juice is a juice with orange. It is a common breakfast food in many countries.",
  },
  {
    name: "Watermelon Juice",
    url: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "35 000",
    desc: "Watermelon Juice is a juice with watermelon. It is a common breakfast food in many countries.",
  },
];

function initMenu(name, id, arr) {
  const menuBlock = document.createElement("div");
  menuBlock.classList.add("menu-block");
  const menuHeading = document.createElement("h2");
  menuHeading.classList.add("menu-heading");
  menuHeading.id = id;
  menuHeading.textContent = name;
  menuBlock.appendChild(menuHeading);
  const menuBox = document.createElement("div");
  menuBox.classList.add("menu-box");
  menuBlock.appendChild(menuBox);
  for (let i of arr) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuBox.appendChild(menuItem);
    const menuDesc = document.createElement("span");
    menuDesc.classList.add("menu-desc");
    menuDesc.textContent = i.desc;
    menuItem.appendChild(menuDesc);
    const menuImg = document.createElement("img");
    menuImg.src = i.url;
    menuItem.appendChild(menuImg);
    const menuName = document.createElement("h3");
    menuName.classList.add("menu-item-name");
    menuName.textContent = i.name;
    menuItem.appendChild(menuName);
    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-item-info");
    menuItem.appendChild(menuInfo);
    const menuExp = document.createElement("p");
    menuExp.textContent = "Hover Image for Description";
    menuInfo.appendChild(menuExp);
    const menuPrice = document.createElement("p");
    menuPrice.textContent = `Price: ${i.price}`;
    menuInfo.appendChild(menuPrice);
    menuContainer.appendChild(menuBlock);
  }
}

window.addEventListener("load", () => {
  initMenu("Breakfast", "breakfast", menuBreakfast);
  initMenu("Omelettes", "omelettes", menuOmelettes);
  initMenu("Pancakes", "pancakes", menuPancakes);
  initMenu("Crepes", "crepes", menuCrepes);
  initMenu("Quiches", "quiches", menuQuiche);
  initMenu("Soups", "soups", menuSoups);
  initMenu("Sandwiches", "sandwiches", menuSandwiches);
  initMenu("Salads", "salads", menuSalads);
  initMenu("Main Course", "main-courses", menuMainCourse);
  initMenu("Hot Drinks", "hot-drinks", menuHotDrinks);
  initMenu("Coconut Coffee", "coconut-coffee", menuCoconutCoffee);
  initMenu("Fresh Juices", "fresh-juices", menuFreshJuices);
});
