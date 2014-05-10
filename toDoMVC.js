$(function () {
	var todos = '';
	function standUp() {
		//get entries from local storage if they exist.
		//populate the list with entries and ids.
		
		if (localStorage && localStorage.length > 0) {
			
			//run populateList to insert all the entries
			//populateList();
		} else {
			var a = [];
			localStorage.setItem('todos', JSON.stringify(a));
		}
		
		//setListeners after the list has been built.
		setListeners();
	}
	function setListeners() {
		//listen for keypresses			
		$('#new-todo').keyup(function (e) {
		//check which key has been pressed.
			checkKeyPress(e);
		});
	}
									
	function checkKeyPress(e) {
	//if the key is the 'enter' key
		if (e.keycode === 13) {
		//save the entry to local storage
			saveEntry();
		//if the key is the 'esc' key
		} else if (e.keycode === 27) {
			console.log('esc');
		}
	}

	//build the entire list based on the contents of local Storage
	function populateList() {
		for (var i = localStorage.length - 1; i >= 0; i--) {
			//localStorage[i]
			console.log("There are entries in localStorage");
		};
	}
	
	function insertEntry() {
		var entry = $('#new-todo').val();
		$('.template li').clone().appendTo('#toDoList');
		$('#toDoList li:last-child label').click().text(entry);
		$('#toDoList li:last-child').attr('data-id',id);
		$('#new-todo').val('');
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
			uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
		}
		
		return uuid;
	}

	function saveEntry(entry) {
		var id = uuid();
		var toDoEntry = {
			'id': id,
			'entry': entry
		};
	
		var a = [];
			if (localStorage.getITem('todos') === null) {
				a = [];
			} else {
				//parse the serialized data back in to an array of objects
				a = JSON.parse(localStorage.getItem('todos'));
			}
		//Push the new data whether it be an object or anything else onto the array
		localStorage.setItem('todos', JSON.stringify(a));
	
		//localStorage.setItem('Todos', JSON.stringify(todoEntry));
	
		insertEntry(entry,id);
	}

		standUp();
	});