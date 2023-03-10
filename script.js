const input = document.querySelector("input");
const ul = document.querySelector(".list");

// Add a new to-do list item
function addItem() {
  // Create a new list item
  const li = document.createElement("li");

  // Add text to the list item
  const text = document.createTextNode(input.value);
  li.appendChild(text);

  // Add a delete button to the list item
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  li.appendChild(button);

  // Add the new list item to the list
  ul.appendChild(li);

  // Clear the input field
  input.value = "";
}

// Delete a to-do list item
function deleteItem(event) {
  const item = event.target.parentElement;
  ul.removeChild(item);
}

// Add a new item when the user presses enter
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addItem();
  }
});

// Add a new item when the user clicks the "Add" button
document.querySelector("button").addEventListener("click", addItem);

// Delete an item when the user clicks the "Delete" button
ul.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    deleteItem(event);
  }
});
