import { $newBtn } from './newTask';
import { taskHolder, content, cardsContainer } from './index';
///////////////////////////////////////
const $task = (function() {
	'use strict';
	//Create task dom element

	class Task {
		constructor(title, description, priority, dueDateHr, dueDateDay, state) {
			this.title = title;
			this.description = description;
			this.priority = priority;
			this.dueDateDay = dueDateHr;
			this.dueDateHr = dueDateDay;
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
						${this.dueDateHr}
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
						${this.dueDateHr}
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
						${this.dueDateHr}
						${this.dueDateDay}
					</p>
				</div>`;

				cardsContainer.appendChild(taskPendingDOM);
			}
		}
	}
	//add a new task
	$newBtn.plusBtn.addEventListener('click', () => {
		let task = new Task();
		task.title = prompt('title') || 'Tarea';
		task.description = prompt('description') || 'Hacer algo...';
		task.priority = prompt('priority') || 'Pendiente';
		task.dueDateHr = prompt('hr') || 'Algún día';
		task.dueDateDay = prompt('day') || '';

		console.log(taskHolder);
		task.renderTask();
	});

	return {
		Task,
	};
})();

export { $task };
