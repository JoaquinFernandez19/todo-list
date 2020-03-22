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

	return {
		plusBtn,
		btnDiv,
	};
})();

export { $newBtn };
