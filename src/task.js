import { $newBtn } from './newTask';
import { taskHolder, cardsContainer, body } from './index';
///////////////////////////////////////
const $task = (function() {
	'use strict';
	//Create task dom element

	class Task {
		constructor(title, description, priority, dueDateHr, dueDateDay, state) {
			this.title = title;
			this.description = description;
			this.priority = priority;
			this.dueDateHr = dueDateHr;
			this.dueDateDay = dueDateDay;
			this.state = 'open';
		}

		renderTask() {
			if (this.priority === 'Urgente' && this.state === 'open') {
				let taskUrgentDOM = document.createElement('div');
				taskUrgentDOM.classList.add('task', 'urgentTask');
				taskUrgentDOM.innerHTML = `
				<div class="task__title">
					<p>
						${this.title}
					</p>
				</div>
				<div class="task__closeBtn">
					<i class="far fa-window-close close"></i>
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
			}
			if (this.priority === 'Importante' && this.state === 'open') {
				let taskImportantDOM = document.createElement('div');
				taskImportantDOM.classList.add('task', 'importantTask');
				taskImportantDOM.innerHTML = `
				<div class="task__title">
					<p>
						${this.title}
					</p>
				</div>
				<div class="task__closeBtn">
					<i class="far fa-window-close close"></i>
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
			}
			if (this.priority === 'Pendiente' && this.state === 'open') {
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
			}
		}
		closeTask() {}
	}
	function createTask() {
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
		let formDueDateHr = $newBtn.form.querySelector('#time').value;
		let formDueDateDay = $newBtn.form.querySelector('#day').value;
		//object ctask
		let task = new Task();
		task.title = formTitle || 'Tarea';
		task.description = formDescription || 'Hacer algo...';
		task.priority = formPriority || 'Pendiente';
		task.dueDateHr = formDueDateHr || 'En algún momento';
		task.dueDateDay = formDueDateDay || 'Algún día';
		taskHolder.push(task);
		task.renderTask();
		$newBtn.form.style.display = 'none';
		///////////////
	}

	$newBtn.submitBtn.addEventListener('click', () => {
		createTask();
	});
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
