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
const body = document.body;
let taskHolder = [];
let oldTaskus;

const loadDocument = () => {
	content.insertBefore($newBtn.btnDiv, content.firstChild);
	oldTaskus = JSON.parse(localStorage.getItem('allEntries')) || [];
	oldTaskus.forEach((task) => {
		let oldTask = new $task.Task();
		oldTask.title = task.title;
		oldTask.description = task.description;
		oldTask.priority = task.priority;
		oldTask.dueDateHr = task.dueDateHr;
		oldTask.dueDateDay = task.dueDateDay;
		oldTask.renderTask();
	});

	console.table(taskHolder);
};

window.onload = loadDocument();
window.addEventListener(
	'beforeunload',
	() => {
		let allEntries = JSON.parse(localStorage.getItem('allEntries')) || [];
		taskHolder.forEach((task) => {
			allEntries.push(task);
		});
		localStorage.setItem('allEntries', JSON.stringify(allEntries));
	},
	false
);

export { taskHolder, cardsContainer, content, body };
////
