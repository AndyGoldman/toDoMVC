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
<<<<<<< HEAD
		setFilter();
		setListeners();
		$('#filters a#' + filter).addClass('strong');
=======
		setListeners();
		updateTodosLeft();
>>>>>>> b044570b2d6262e75565ca6b140d5fc5a6f30098
	}
	function setListeners() {
		//console.log('running');
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
<<<<<<< HEAD
		// if the key is the 'enter' key
		if (e.keycode === 13) {
			//save the entry to local storage
=======
	//if the key is the 'enter' key
		if (e.keyCode == 13) {
			console.log(e);
		//save the entry to local storage
>>>>>>> b044570b2d6262e75565ca6b140d5fc5a6f30098
			saveEntry();
		}
	}
	
	function checkEditPress(e) {
		if (e.keyCode === 13) {
<<<<<<< HEAD
			updateEntry();
		} else if (e.keyCode === 27) {
=======
			console.log('Enter');
			updateEntry();
		} else if (e.keyCode === 27) {
			//if the key is the 'esc' key
			console.log('Esc');
>>>>>>> b044570b2d6262e75565ca6b140d5fc5a6f30098
			abortEditing();
		}
	}

	// build the entire list based on the contents of local Storage
	function populateList() {
<<<<<<< HEAD
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
=======
		todos = JSON.parse(localStorage.getItem('todos'));
		if (todos.length > 0) {
			for (var i = 0; i <= todos.length - 1; i++) {
				insertEntry(todos[i]['entry'], todos[i]['id'], todos[i]['completed']);
			};
		}
>>>>>>> b044570b2d6262e75565ca6b140d5fc5a6f30098
	}
		
		if (allCompleted === 'true') {
			$('#toggle-all').prop('checked', true);
		}
		
		update TodosLeft();
		
		
	}
	
<<<<<<< HEAD
	function insertEntry() {
=======
	function insertEntry(entry, id, status) {
>>>>>>> b044570b2d6262e75565ca6b140d5fc5a6f30098
		$('.template li').clone().appendTo('#todo-list');
		$('#todo-list li:last-child label').text(entry);
		$('#todo-list li:last-child').attr('data-id',id);
		if (status) {
			$('#todo-list li:last-child').addClass('completed');
<<<<<<< HEAD
			$('#todo-list li:last-child .toggle').attr('checked', true)
=======
			$('#todo-list li:last-child .toggle').attr('checked', true);
>>>>>>> b044570b2d6262e75565ca6b140d5fc5a6f30098
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
<<<<<<< HEAD
			'id':id,
			'name':entry
			'completed':false
=======
			'id': id,
			'entry': entry,
			'completed': false
>>>>>>> b044570b2d6262e75565ca6b140d5fc5a6f30098
		};
	
		todos = [];
			if (localStorage.getItem('todos') === null) {
				todos = [];
			} else {
				//parse the serialized data back in to an array of objects
				todos = JSON.parse(localStorage.getItem('todos'));
			}
		
		//Push the new data whether it be an object or anything else onto the array
		todos.push(toDoEntry);
		localStorage.setItem('todos', JSON.stringify(todos));
	
		//localStorage.setItem('Todos', JSON.stringify(todoEntry));
	
		updateTodosLeft();
		insertEntry(entry,id);
	}
	
		function addListItemListener(id) {
			$("li[data-id *= '" + id + "']").dblclick(function (event) {
				//if dblclick was on a label and the parent isn't marked as completed.
				if(event.target.nodeName === "label" && (!$(event.target).closest('li').hasClass('completed'))) {
					//remove the 'editing' class from any other todo items and remove any other editor listener
					$('.editing').removeClass('.editing');
					$('.edit').off('keyup');
					var input = $(event.target);
					var text = input.text();
					input.closest('li').addClass('editing');
					input.closest('li').find('.edit').val(text).focus;
					addEditorListener();
				}
			});
			
			$("li[data-id *= '" + id + "']").click(function(event) {
				if(event.target.nodeName === 'INPUT') {
					var item = $(event.target).closest('li');
					if(item.hasClass('completed')) {
						item.removeClass('completed');
						updateCompleted(id, false)
					} else {
						item.addClass('completed');
						updateCompleted(id, true);
					}
					updateTodosLeft();
				}
			});
		}
	
		function addEditorListener() {
			$('editing .edit').on('keyup', function(e) {
				checkEditPress(e);
			})
		}
	
		function updateEntry() {
			var id = $('.editing').attr('data-id');
			for(i=0; i <= todos.length - 1; i++) {
				if (todos[i]['id'] === id) {
					todos[i]['entry'] = $('.editing .edit').val();
				}
			}
			localStorage.setItem('todos'.JSON.stringify(todos));
			$('.editing label').text($('.editing .edit').val());
			$('.editing').removeClass('.editing').find('.edit').val('');
		}
	
		function updateCompleted(id,status) {
			for(i=0; i <= todos.length-1; i++) {
				if(todos[i]['id'] === id) {
					 todos[i]['completed'] = status;
					 }
					 localStorage.setItem('todos',JSON.stringify(todos));
			}
		}
		
		function abortEditing() {
			$('editing').removeClass('editing');
			$('.edit').val('');
		}
	
		//refresh count of todos to be completed.
		function updateTodosLeft() {
			var left = 0;
			if (todos.length > 0) {
				for (i = 0; i < todos.length; i++) {
					if (todos[i]['completed'] == false) {
						left++;
					}
					
				}
			}
			
			if (left === 1) {
				$('#plural').hide();
			} else {
				$('#plural').show();
			}
			
			$('#todos-remaining').text(left);
		}
	
		//add destroy function
	
		//add 'complete all' function
	
		//show footer when todos are in list
	
		//add filter functions.
					
		standUp();
	});