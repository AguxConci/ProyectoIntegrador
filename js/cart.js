const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const quantity = document.getElementById("quantity");
// botones item 1
const add2 = document.getElementById('add2');
const subtract2 = document.getElementById('subtract2');
const quantity2 = document.getElementById("quantity2");
add.addEventListener("click", () => quantity.value = Number(quantity.value) + 1);
subtract.addEventListener("click", () => {
    if (Number(quantity.value) > 0)
    return quantity.value = Number(quantity.value) - 1;
});
// botones item 2
add2.addEventListener("click", () => quantity2.value = Number(quantity2.value) + 1);
subtract2.addEventListener("click", () => {
    if (Number(quantity2.value) > 0)
    return quantity2.value = Number(quantity2.value) - 1;
});