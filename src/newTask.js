/////////////////////////////////////////
const $newBtn = (function() {
	'use strict';
	//Create dom element
	let btnDiv = document.createElement('div');
	btnDiv.classList.add('new-task-btn');

	let paragraph = document.createElement('p');
	let paragraphNode = document.createTextNode('Nueva tarea');
	paragraph.appendChild(paragraphNode);
	let span = document.createElement('span');
	let icon = document.createElement('i');
	icon.classList.add('fas', 'fa-plus-circle', 'plus');
	span.appendChild(icon);

	btnDiv.appendChild(paragraph);
	btnDiv.appendChild(span);

	let plusBtn = span;
	// HOUR AND DATE
	let today = new Date();
	function getMinutesX() {
		let minutes = today.getMinutes();
		let minutesString = minutes.toString();
		if (minutesString.length < 2) {
			return `0${minutesString}`;
		} else {
			return minutesString;
		}
	}
	function gethoursX() {
		let hours = today.getHours();
		let hoursString = hours.toString();
		if (hoursString.length < 2) {
			return `0${hoursString}`;
		} else {
			return hoursString;
		}
	}

	let time = gethoursX() + ':' + getMinutesX();

	//form popUp
	let form = document.createElement('div');
	let submitBtn = document.createElement('INPUT');
	submitBtn.setAttribute('type', 'submit');
	submitBtn.setAttribute('class', 'submitBtn');
	submitBtn.setAttribute('value', 'Agregar tarea');
	submitBtn.setAttribute('onclick', 'return false');
	let closeSpan = document.createElement('span');
	let closeFormBtn = document.createElement('i');
	closeFormBtn.classList.add('far', 'fa-window-close');
	closeFormBtn.setAttribute('id', 'closeForm');
	closeSpan.appendChild(closeFormBtn);
	closeSpan.setAttribute('id', 'closeFormSpan');
	form.classList.add('taskForm');
	form.innerHTML = `
	<form action="/index.html" class="form">
		
		<label class="miniLabel">Tarea</label>
		<input 
			type="text"
			id="title"
			name="title"
			value=""
			placeholder = "Limpiar"
		 />

		<label class="miniLabel">Descripcion</label>
		<textarea id="description"></textarea>
			

		<div class="checkboxStyle"><div><input type="radio" id="Urgente" name="priority" value="Urgente" />
		<label for="Urgente">Urgente</label></div>
		<div><input type="radio" id="Importante" name="priority" value="Importante" />
		<label for="Importante">Importante</label></div>
		<div><input type="radio" id="Pendiente" name="priority" value="Pendiente" />
		<label for="Pendiente">Pendiente</label></div></div>
		
		<label class="miniLabel">Hora</label>
		<input type="time" id="time" name="time"
	    value="${time}" required>
	   <label class="miniLabel">Fecha</label>
	   <input type="date" id="day" name="day"
       value=""
       min="2020-03-23" max="2020-12-31"required>
	</form>
	`;

	let innerForm = form.querySelector('form');
	innerForm.appendChild(submitBtn);
	innerForm.insertBefore(closeSpan, innerForm.children[0]);
	//scrol efect
	window.addEventListener('scroll', () => {
		if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
			btnDiv.style.transition = 'font-size 0.3s';
			btnDiv.style.fontSize = '1.5em';
			paragraph.textContent = '';
			plusBtn.style.fontSize = '2em';
		} else {
			btnDiv.style.transition = 'font-size 0.3s';
			btnDiv.style.fontSize = '2em';
			plusBtn.style.fontSize = '1em';
			paragraph.textContent = 'Nueva tarea';
		}
	});
	return {
		closeSpan,
		innerForm,
		submitBtn,
		form,
		plusBtn,
		btnDiv,
	};
})();

export { $newBtn };
