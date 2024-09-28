//3 variables that reference favchap, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//
button.addEventListener('click', function() {

    if (input.value.trim() != ''){
        //creates an 'li' element to hold the chapters with X
        const li = document.createElement('li');

        //delete button
        const deleteButton = document.createElement('button');

        //populates the li element
        li.textContent = input.value;

        //populates textContent with '❌'
        deleteButton.textContent = '❌';

        //append the li element with '❌'
        li.append(deleteButton);

        //appends the li element to the HTML's ul
        list.append(li);

        //delete button
        deleteButton.addEventListener('click', function() {
            //
            list.removeChild(li);
            //
            input.focus();
        });

        //
        input.focus();
        return;
    }
    else
    {
        alert("Item cannot be blank.")
        input.focus();
        return;
    }
});

input.value = '';

input.focus();