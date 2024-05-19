'use strict';

const categoriesQuantity = document.querySelector("#categories")
const categoriesNumbers = categoriesQuantity.querySelectorAll(".item")

console.log("Number of categories:", categoriesNumbers.length);

categoriesNumbers.forEach((category) => {
    
    const nameTitle = category.querySelector("h2").textContent;
    const lengthItem = category.querySelectorAll("li").length;
    
    console.log(`category: ${nameTitle}`)
    console.log(`elements: ${lengthItem}`)

})