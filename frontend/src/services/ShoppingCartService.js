import { json } from "react-router-dom";

export function getShoppingCart(){
  return JSON.parse(window.sessionStorage.getItem("Shoppingcart"));
}

export function isEmptyCart(){
  if(getShoppingCart() == 0){
    return true;
  }
  return false;
}

export function clearShoppingCart(){
  window.sessionStorage.setItem("Shoppingcart", JSON.stringify([]));
}

// export function deleteItemFromShoppingCart(itemName){

//   const sessionSC = JSON.parse(sessionStorage.getItem("Shoppingcart"));
  
//   const itemToDelete = sessionSC.findIndex(el => el.name === itemName);

//   if(itemToDelete != 0 || itemToDelete != sessionSC.length){

//     const firstPart = sessionSC.slice(0, itemToDelete);
//     const secondPart = sessionSC(itemToDelete + 1);

//     const newSessionSC = firstPart.concat(secondPart);

//     sessionStorage.setItem("Shoppingcart", JSON.stringify(newSessionSC));
//   } else if(itemToDelete == 0){

//     sessionStorage.setItem("Shoppingcart", JSON.stringify(sessionSC(itemToDelete + 1)));

//   } else sessionStorage.setItem("Shoppingcart", JSON.stringify(sessionSC.slice(0,itemToDelete)));

// }

export function addItemToShoppingCart(item){
  //Retrieve sessionShoppingCart
  const sessionSC = getShoppingCart();

  //check if sessionShoppingcart contains the same object that is being added to the shoppingcart
  const containsItem = sessionSC.find(element => 
    element[0].name === item.name);

  //if it contains same object
  if(containsItem){
    //find index of this object
    var index = sessionSC.findIndex(obj => obj[0].name === item.name);

    //increase amount.
    sessionSC[index][1] += 1;
    //add to sessionstorage
    window.sessionStorage.setItem("Shoppingcart", JSON.stringify(sessionSC));

  }else {
    //add default amount to new object
    let newObj =  [item, 1]
    //add new object to the sessionShoppingcart array.
    window.sessionStorage.setItem("Shoppingcart", JSON.stringify(sessionSC.concat([newObj])));
  }
}