import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
//newTaskBtn
import { $newBtn } from './newTask';
import { $task } from './task';
//cardModule
const content = document.querySelector('#content');
const cardsContainer = document.querySelector('.cards-container');
let taskHolder = [];

const loadDocument = () => {
	content.insertBefore($newBtn.btnDiv, content.firstChild);
};

window.onload = loadDocument();

export { taskHolder, cardsContainer };
