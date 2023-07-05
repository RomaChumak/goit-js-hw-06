const listEl = document.querySelector('#categories');
const itemElement = listEl.children;
console.log("Number of categories:", itemElement.length);
[...itemElement].forEach(function (item) {
     console.log("Category:", item.children[0].textContent)
    console.log("Elements:", item.children[1].children.length)
});





