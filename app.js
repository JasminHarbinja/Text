// Elements
const elements = document.querySelectorAll('.btn');

//Event
elements.forEach(element => {
    elements.addEventListener('click', () => {
        let command = element.dataset['element'];

        if (command =='creatLink' || command == 'insertImage') {
            let url = prompt('Ubacite link ovdje:', 'http://')
            document.execCommand(command, false, null);
        } else { 

        document.execCommand(command, false, null);
    }
    });
});