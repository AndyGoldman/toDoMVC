$(function () {
	
	var todos = '';
	var filter = 'all';
	function standUp() {
		// get entries from local storage if they exist.
		// populate the list with entries and ids.
		
		if(localStorage && localStorage.length > 0) {
			
			// run populateList to insert all the entries
			// populateList();
		} else {
			var a = [];
			localStorage.setItem('todos',JSON.stringify(a));
		}
		
		//setListeners after the list has been built.
		populateList();
		setFilter();
		setListeners();
		$('#filters a#' + filter).addClass('strong');
	}
	function setListeners() {
		//listen for keypresses			
		$('#new-todo').keyup(function(e) {
			// check which key has been pressed.
			checkKeyPress(e);
		});
		
		$('#toggle-all').on('click', function() {
			// console.log($(this).is(':checked'));
			toggleAllComplete();
		})
		
		$('#filters a').on('click', function(e) {
			filter = $(this).attr('id');
			$('#filters a').removeClass('strong');
			$(this).addClass('strong');
			setFilter();
		})
	}	
		
	function setFilter() {
		$('body').removeClass.addClass(filter);
	}
	
	function checkKeyPress(e) {
		// if the key is the 'enter' key
		if (e.keycode === 13) {
			//save the entry to local storage
			saveEntry();
		}
	}
	
	function checkEditPress(e) {
		if (e.keyCode === 13) {
			updateEntry();
		} else if (e.keyCode === 27) {
			abortEditing();
		}
	}

	// build the entire list based on the contents of local Storage
	function populateList() {
		$('#todo-list)
		var allCompleted = true;
		todos = JSON.parse(localStorage.getItem('todos'));
		if(todos.length > 0) {
			for (var i = 0; i <= todos.length - 1; i++) {
			// insert the todo into the html list
			insertEntry(todos[i]['name'],todos[i]['id'],todos[i]['completed']);
			if (todos[i]['completed'] === 'false') {
				allCompleted = 'false';
			}
		};
	}
		
		if (allCompleted === 'true') {
			$('#toggle-all').prop('checked', true);
		}
		
		update TodosLeft();
		
		
	}
	
	function insertEntry() {
		$('.template li').clone().appendTo('#todo-list');
		$('#todo-list li:last-child label').text(entry);
		$('#todo-list li:last-child').attr('data-id',id);
		if (status) {
			$('#todo-list li:last-child').addClass('completed');
			$('#todo-list li:last-child .toggle').attr('checked', true)
		}
		$('#new-todo').val('');
		addListItemListener(id);
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
		var entry = $('#new-todo').val();
		var id = uuid();
		var toDoEntry = {
			'id':id,
			'name':entry
			'completed':false
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