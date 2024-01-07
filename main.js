const fruits = ["banana", "apple", "oranges", "kiwi"];

document.getElementById("demo").innerHTML = fruits;

let size = fruits.length;
document.getElementById("size").innerHTML = size;

let fruitsLength = fruits.length;

let list = "<ul>";
for (let i = 0; i < fruitsLength; i++) {
    list += "<li>" + fruits[i] + "</li>";
}
list += "</ul>";

document.getElementById("list").innerHTML = list;