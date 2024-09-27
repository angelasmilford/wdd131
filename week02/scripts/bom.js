//3 variables that gold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector(''); //fill in the black

//creates a li element that'll hold each entry's chapter title and associated delete button
const li = document.createElement('li'); //'li' was just for simplicity; it didn't have to be named the same as the element being created

//creates a delete button
const deleteButton = document.createElement('button');

//populates the li element variable's textContent or innerHTML with the input value
//value property is used because the input variable references the wanted HTML input text field
li.textContent = input.value; //its textContent because it's more secure, doesn't include HTML tags

//populate the button 'textContent' with a ❌
deleteButton.textContent = '❌';

//append the li element variable with the delete button
li.append(deleteButton);

//append the li element variable to the unordered list in your HTML
list.append(li);

//creates a click event listener for the 'Add Chapter' button using an addEventListener
button.addEventListener('click', function() {
    //
    if(input.value.trim() != ''){

    }
});

//adds a click event listener to the delete button that removes the li element
deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});

//changes the input value to nothing or the empty string to clean up the interface for the user
input.value = '';

//
input.focus();