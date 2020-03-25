import { $newBtn } from './newTask';
import { taskHolder, cardsContainer, body } from './index';
///////////////////////////////////////
const $task = (function() {
	'use strict';
	//Create task dom element

	class Task {
		constructor(title, description, priority, dueDateHr, dueDateDay) {
			this.title = title;
			this.description = description;
			this.priority = priority;
			this.dueDateHr = dueDateHr;
			this.dueDateDay = dueDateDay;
		}

		renderTask() {
			//Depengin on the priority, we make a diferente DOM version of the task
			//Every dom element has a eventlistener in his close btn to detect if the person
			//wants to close it
			if (this.priority === 'Urgente') {
				let taskUrgentDOM = document.createElement('div');
				taskUrgentDOM.classList.add('task', 'urgentTask');
				taskUrgentDOM.innerHTML = `
				<div class="task__title">
					<p>
						${this.title}
					</p>
				</div>
				<div class="task__closeBtn">
					<span class="closeTask">
						<i class="far fa-window-close close"></i>
					</span>
				</div>
				<div class="task__description">
					<p>
						${this.description}
					</p>
				</div>
				<div class="task__priority">
					<p>
						${this.priority}
					</p>
				</div>
				<div class="task__dueDate">
					<p>
						${this.dueDateHr}<br>
						${this.dueDateDay}
					</p>
				</div>`;
				cardsContainer.appendChild(taskUrgentDOM);
				let closeTask = taskUrgentDOM.querySelector('.closeTask');
				closeTask.addEventListener('click', () => {
					console.log(`removed ${this.title}`);
					cardsContainer.removeChild(taskUrgentDOM);
					this.deleteTask();
				});
			}
			if (this.priority === 'Importante') {
				let taskImportantDOM = document.createElement('div');
				taskImportantDOM.classList.add('task', 'importantTask');
				taskImportantDOM.innerHTML = `
				<div class="task__title">
					<p>
						${this.title}
					</p>
				</div>
				<div class="task__closeBtn">
					<span class="closeTask">
						<i class="far fa-window-close close"></i>
					</span>
				</div>
				<div class="task__description">
					<p>
						${this.description}
					</p>
				</div>
				<div class="task__priority" >
					<p>
						${this.priority}
					</p>
				</div>
				<div class="task__dueDate">
					<p>
					${this.dueDateHr}<br>
					${this.dueDateDay}

					</p>
				</div>`;
				cardsContainer.appendChild(taskImportantDOM);
				let closeTask = taskImportantDOM.querySelector('.closeTask');
				closeTask.addEventListener('click', () => {
					console.log(`removed ${this.title}`);
					cardsContainer.removeChild(taskImportantDOM);

					this.deleteTask();
				});
			}
			if (this.priority === 'Pendiente') {
				let taskPendingDOM = document.createElement('div');
				taskPendingDOM.classList.add('task', 'easyTask');
				taskPendingDOM.innerHTML = `
				<div class="task__title">
					<p>
						${this.title}
					</p>
				</div>
				<div class="task__closeBtn">
					<span class="closeTask">
						<i class="far fa-window-close close"></i>
					</span>
				</div>
				<div class="task__description">
					<p>
						${this.description}
					</p>
				</div>
				<div class="task__priority" >
					<p>
						${this.priority}
					</p>
				</div>
				<div class="task__dueDate">
					<p>
					${this.dueDateHr}<br>
					${this.dueDateDay}
	
					</p>
				</div>`;

				cardsContainer.appendChild(taskPendingDOM);
				let closeTask = taskPendingDOM.querySelector('.closeTask');
				closeTask.addEventListener('click', () => {
					console.log(`removed ${this.title}`);
					cardsContainer.removeChild(taskPendingDOM);

					this.deleteTask();
				});
			}
		}
		deleteTask() {
			let allEntries = JSON.parse(localStorage.getItem('allEntries')) || [];

			allEntries.forEach((entry) => {
				if (
					entry.title === this.title &&
					entry.description === this.description &&
					entry.dueDateHr === this.dueDateHr &&
					entry.priority === this.priority
				) {
					let index = allEntries.indexOf(entry);
					if (index > -1) {
						allEntries.splice(index, 1);
					}

					localStorage.setItem('allEntries', JSON.stringify(allEntries));
				}
			});
			let index = taskHolder.indexOf(this);
			taskHolder.splice(index, 1);
		}
	}
	function createTask() {
		//TIMEEEEEEE
		function getSecondsX() {
			let today = new Date();
			let seconds = today.getSeconds();
			let secondsString = seconds.toString();
			if (secondsString.length < 2) {
				return `0${secondsString}`;
			} else {
				return secondsString;
			}
		}
		//get the data from the FORM
		let formTitle = $newBtn.form.querySelector('#title').value;
		let formDescription = $newBtn.form.querySelector('#description').value;
		let formPriority;
		switch (true) {
			case $newBtn.form.querySelector('#Urgente').checked:
				formPriority = 'Urgente';
				break;
			case $newBtn.form.querySelector('#Importante').checked:
				formPriority = 'Importante';
				break;
			case $newBtn.form.querySelector('#Pendiente').checked:
				formPriority = 'Pendiente';
				break;
			default:
				formPriority = 'Pendiente';
		}
		let formDueDateHr = $newBtn.form.querySelector('#time').value + ':' + getSecondsX();
		let formDueDateDay = $newBtn.form.querySelector('#day').value;
		//object ctask
		let task = new Task();
		task.title = formTitle || 'Tarea';
		task.description = formDescription || 'Hacer algo...';
		task.priority = formPriority || 'Pendiente';
		task.dueDateHr = formDueDateHr || 'En algún momento';
		task.dueDateDay = formDueDateDay || 'Algún día';

		//save object in array
		taskHolder.push(task);
		//render the object in the html
		task.renderTask();
		//hide the form
		$newBtn.form.style.display = 'none';
		///////////////
	}

	//submit task
	$newBtn.submitBtn.addEventListener('click', () => {
		createTask();
		body.removeChild($newBtn.form);
	});
	//close form
	$newBtn.closeSpan.addEventListener('click', () => {
		body.removeChild($newBtn.form);
	});
	//add a new task
	$newBtn.plusBtn.addEventListener('click', () => {
		body.appendChild($newBtn.form);
		$newBtn.form.style.display = 'flex';
	});

	return {
		Task,
	};
})();

export { $task };
