$(document).ready(function () {
	$('#new-todo').keyup(function (e) {
		checkKeyPress(e);
	});
});
									
function checkKeyPress(e) {
	if (e.keycode === 13) {
		insertEntry();
	} else if (e.keycode === 27) {
		console.log('esc');
	}
}

function insertEntry() {
	var entry = $('#new-todo').val();
	$('.template li').clone().appendTo('#toDoList');
	$('#todo-list li:last-child label').click().text(entry);

	saveEntry(entry);
		
}

function uuid() {
	/*jshint bitwise:false */
	var i, random;
	var uuid = '';
		
	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString;
	}
		
	return uuid;
}

function saveEntry(entry) {
	var id = uuid();
	var toDoEntry = {
			'id': id,
			'entry': entry
		};
	localStorage.setItem('Todos', JSON.stringify(toDoEntry));
}

setListeners();


