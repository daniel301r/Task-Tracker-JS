import * as view from './view';
import * as model from './model';
import { DOMstrings} from './view';
import { data } from './model';

const setupEventListeners = () => {

	document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event){
		if(event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});

	document.querySelector(DOMstrings.container).addEventListener('click', ctrlDeleteItem);
};

const updatePercentages = () => {

	// 1. calculate amount of minutes
	model.calculatePercentageTotals();

	// 2. return percentages
	const percent = model.displayPercentages(); 

	// 2. display percentage on the UI
	view.displayOverallPercentages(percent);
};


const ctrlAddItem = () => {
	// 1. get the input data
	let input = view.getInput();

	data.goals.programming = parseInt(input.programmingGoal * 60);
	data.goals.spanish = parseInt(input.spanishGoal * 60);
	data.goals.teaching = parseInt(input.teachingGoal * 60);
	
	if (data.goals[input.type] === 0) {
		alert(`Please set weekly goal for ${input.type}`);
	} else {
		let newTask;

		if (input.description != "" && !isNaN(input.time) && input.time > 0) {
			// 2. add item to task controller			
			newTask = model.addTask(input.type, input.day, input.description, input.time);

			// 3. calculate and update new percentages
			updatePercentages();

			// 4. add item to UI
			view.addTaskList(newTask, input.type);
			
			// 5. clear the input fields
			view.clearFields();
		}
	}
			
};

const ctrlDeleteItem = (event) => {
	var itemID;
	// you need to count how much to traverse up the DOM with parentNode
	itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

	if (itemID) {
		let splitID, type, ID;
		// seperate the id of element into type of task and individual ID
		splitID = itemID.split('-');
		type = splitID[0];
		ID = parseInt(splitID[1]);
		
		// remove from data structure
		model.deleteTask(type, ID);
		// reomve from UI
		view.deleteTaskList(itemID);
		// update task percentages
		updatePercentages();
	}


};

function init () {
	setupEventListeners();
	view.getTime();
} 
	
init();


