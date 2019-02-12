/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/js/test.js\");\n\r\n\r\nconsole.log(_test__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\n\r\nvar data = {\r\n\tallTasks: {\r\n\t\tprogramming: [],\r\n\t\tspanish: [],\r\n\t\tteaching: []\r\n\t},\r\n\ttimeTotals: {\r\n\t\tprogramming: 0,\r\n\t\tspanish: 0,\r\n\t\tteaching: 0\r\n\t},\r\n\tpercentTotals: {\r\n\t\tprogramming: 0,\r\n\t\tspanish: 0,\r\n\t\tteaching: 0\r\n\t},\r\n\tgoals: {\r\n\t\tprogramming: 0,\r\n\t\tspanish: 0,\r\n\t\tteaching: 0\r\n\t},\r\n\ttotalPercentage: 0,\r\n}\r\n\r\nvar taskController = (function() {\r\n\tclass Programming {\r\n\t\tconstructor (id, day, description, time) {\r\n\t\t\tthis.id = id;\r\n\t\t\tthis.day = day;\r\n\t\t\tthis.description = description;\r\n\t\t\tthis.time = time;\r\n\t\t\tthis.percentage = -1;\r\n\t\t}\r\n\r\n\t\tcalculatePercentage () {\r\n\t\t\tthis.percentage = Math.round(this.time / data.goals.programming * 100);\r\n\t\t}\r\n\t}\r\n\r\n\tclass Spanish {\r\n\t\tconstructor (id, day, description, time) {\r\n\t\t\tthis.id = id;\r\n\t\t\tthis.day = day;\r\n\t\t\tthis.description = description;\r\n\t\t\tthis.time = time;\r\n\t\t\tthis.percentage = -1;\r\n\t\t}\r\n\r\n\t\tcalculatePercentage () {\r\n\t\t\tthis.percentage = Math.round(this.time / data.goals.spanish * 100);\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tclass Teaching {\r\n\t\tconstructor (id, day, description, time) {\r\n\t\t\tthis.id = id;\r\n\t\t\tthis.day = day;\r\n\t\t\tthis.description = description;\r\n\t\t\tthis.time = time;\r\n\t\t\tthis.percentage = -1;\r\n\t\t}\t\r\n\r\n\t\tcalculatePercentage () {\r\n\t\t\tthis.percentage = Math.round(this.time / data.goals.teaching * 100);\r\n\t\t}\t\r\n\t}\r\n\r\n\tvar calculateTotal = function(type){\r\n\t\tvar sum = 0;\r\n\t\tdata.allTasks[type].forEach(function(cur){\r\n\t\t\tsum += cur.time;\r\n\t\t});\r\n\t\tdata.timeTotals[type] = sum;\r\n\t\treturn sum;\r\n\t};\r\n\r\n\t//  -------------- !!!!! ----------- I am sure there is a better way to do this - I'm converting my data object into an array and then iterating over because\r\n\t// as far as I know you can't do that with objects in Javascript\r\n\tvar obj_arr = [\r\n\t\tdata.allTasks.programming,\r\n\t\tdata.allTasks.spanish,\r\n\t\tdata.allTasks.teaching\r\n\t];\r\n\r\n\tvar getTaskPercentages = function(){\r\n\t\tfunction test(x){\r\n\t\t\tx.forEach(function(cur){\r\n\t\t\t\tcur.calculatePercentage();\r\n\t\t\t});\r\n\t\t}\r\n\t\tfor (var i = 0; i < obj_arr.length; i++){\r\n\t\t\t\ttest(obj_arr[i]);\r\n\t\t}\r\n\t};\r\n\r\n\tvar getGroupPercentages = function(type) {\r\n\t\t// ------ !!!! ------- tried to use reduce but because when I initially add an item the array is empty it doesn't let me\r\n\r\n\t\t// const sum = data.allTasks[type].reduce((acc, cur) =>{\r\n\t\t// \treturn acc + cur.percentage;\r\n\t\t// });\r\n\t\t// return sum\r\n\t\t\r\n\t\tvar sum = 0;\r\n\t\tdata.allTasks[type].forEach(function(cur){\r\n\t\t\tsum += cur.percentage;\r\n\t\t});\r\n\t\tdata.percentTotals[type] = sum;\r\n\t\treturn sum;\r\n\t};\r\n\r\n\tvar getOverallPercentage = function(){\r\n\r\n\t\t\tvar goals = data.goals.programming + data.goals.spanish + data.goals.teaching;\r\n\t\t\tvar totals = data.timeTotals.programming + data.timeTotals.spanish + data.timeTotals.teaching;\r\n\t\t\t\t\r\n\t\t\tvar overallPercentage = Math.round((totals / goals) * 100);\r\n\r\n\t\t\tdata.totalPercentage = overallPercentage;\r\n\r\n\t\t\treturn overallPercentage;\r\n\t};\r\n\r\n\r\n\treturn {\r\n\t\taddTask: function(type, day, description, time) {\r\n\t\t\tvar newTask, ID;\r\n\r\n\t\t\tif (data.allTasks[type].length > 0) {\r\n\t\t\t\tID = data.allTasks[type][data.allTasks[type].length -1].id + 1;\r\n\t\t\t} else {\r\n\t\t\t\tID = 0;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tif (type === 'programming') {\r\n\t\t\t\tnewTask = new Programming(ID, day, description, time); \r\n\t\t\t} else if (type === 'spanish') {\r\n\t\t\t\tnewTask = new Spanish(ID, day, description, time);\r\n\t\t\t} else {\r\n\t\t\t\tnewTask = new Teaching(ID, day, description, time);\r\n\t\t\t}\r\n\r\n\t\t\tdata.allTasks[type].push(newTask);\r\n\r\n\t\t\treturn newTask;\r\n\t\t},\r\n\r\n\t\tdeleteTask: function(type, id) {\r\n\t\t\tvar ids, index;\r\n\r\n\t\t\t// get all the ids of the elements in the array\r\n\t\t\tids = data.allTasks[type].map(function(current){\r\n\t\t\t\treturn current.id;\r\n\t\t\t});\r\n\r\n\t\t\t// find the index in the array of the selected id\r\n\t\t\tindex = ids.indexOf(id);\r\n\r\n\t\t\t// use splice to get rid of element in the array\r\n\t\t\tif (index != -1) {\r\n\t\t\t\tdata.allTasks[type].splice(index, 1);\r\n\t\t\t}\r\n\r\n\t\t},\r\n\r\n\t\tcalculatePercentageTotals: function () {\r\n\r\n\t\t\t// calculate total minutes of tasks\r\n\t\t\tcalculateTotal('programming');\r\n\t\t\tcalculateTotal('spanish');\r\n\t\t\tcalculateTotal('teaching');\r\n\r\n\t\t\t// get percentages of each task\r\n\t\t\tgetTaskPercentages();\r\n\t\t\t\r\n\t\t\t// get total percentage by task\r\n\t\t\tgetGroupPercentages('programming');\r\n\t\t\tgetGroupPercentages('spanish');\r\n\t\t\tgetGroupPercentages('teaching');\r\n\t\t\t// work out total percentage of all goals done\r\n\t\t\tgetOverallPercentage();\r\n\r\n\t\t},\t\r\n\r\n\t\tdisplayPercentages: function() {\r\n\t\t\treturn {\r\n\t\t\t\toverall: data.totalPercentage,\r\n\t\t\t\tprogramming: data.percentTotals.programming,\r\n\t\t\t\tspanish: data.percentTotals.spanish,\r\n\t\t\t\tteaching: data.percentTotals.teaching,\r\n\t\t\t}\r\n\t\t},\t\r\n\t}\r\n})();\r\n\r\nvar UIController = (function() {\r\n\r\n\tvar DOMstrings = {\r\n\t\tinputType: '.select.type',\r\n\t\tinputDay: '.select.day',\r\n\t\tinputDescription: '.select.description',\r\n\t\tinputTime: '.select.time',\r\n\t\tinputBtn: '.add__btn',\r\n\t\tprogrammingList: '.programming.list',\r\n\t\tspanishList: '.spanish.list',\r\n\t\tteachingList: '.teaching.list',\r\n\t\tprogrammingGoal: '.programmingGoalInput',\r\n\t\tspanishGoal: '.spanishGoalInput',\r\n\t\tteachingGoal: '.teachingGoalInput',\r\n\t\toverallPer: '.overall__percentage',\r\n\t\tprogPerc: '.programming__total',\r\n\t\tspanPerc: '.spanish__total',\r\n\t\tteachPerc: '.teaching__total',\r\n\t\tcontainer: '.task__container',\r\n\t\tweekDate: '.week__date'\r\n\t}\r\n\r\n\treturn {\r\n\t\tgetInput: function () {\r\n\t\t\treturn {\r\n\t\t\t\ttype: document.querySelector(DOMstrings.inputType).value,\r\n\t\t\t\tday: document.querySelector(DOMstrings.inputDay).value,\r\n\t\t\t\tdescription: document.querySelector(DOMstrings.inputDescription).value,\r\n\t\t\t\ttime: parseFloat(document.querySelector(DOMstrings.inputTime).value), // this turns it into a number\r\n\t\t\t\tprogrammingGoal: document.querySelector(DOMstrings.programmingGoal).value,\r\n\t\t\t\tspanishGoal: document.querySelector(DOMstrings.spanishGoal).value,\r\n\t\t\t\tteachingGoal: document.querySelector(DOMstrings.teachingGoal).value,\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tgetDOMstrings: function () {\r\n\t\t\treturn DOMstrings;\r\n\t\t},\r\n\r\n\t\tgetTime: function() {\r\n\t\t\t\tvar dateObj, date, day, month, year;\r\n\t\t\r\n\t\t\t\tdateObj = new Date;\r\n\r\n\t\t\t\tdocument.querySelector(DOMstrings.weekDate).innerHTML = `${dateObj.toDateString()}`\r\n\t\t},\r\n\r\n\t\taddTaskList: function (obj, type) {\r\n\t\t\t// create variables for element, html, newHTML\r\n\t\t\tvar element, html, newHTML;\r\n\r\n\t\t\t//if depending on what type it is and the element that needs to be selected - also the html code to be put it\r\n\t\t\tif (type === 'programming') {\r\n\t\t\t\telement = DOMstrings.programmingList;\r\n\t\t\t\thtml = '<div class=\"task__list\" id=\"programming-%id%\"><div class=\"task__description\">%description%</div><div class=\"right\"><div class=\"task__time\">%time% mins</div><div class=\"task__day\">%day%</div><div class=\"task__percentage\">%percentage%</div><div class=\"task__delete\"><button class=\"item__delete--btn\"><i class=\"far fa-times-circle\"></i></button></div></div></div>';\r\n\t\t\t} else if (type === 'spanish') {\r\n\t\t\t\telement = DOMstrings.spanishList;\r\n\t\t\t\thtml = '<div class=\"task__list\" id=\"spanish-%id%\"><div class=\"task__description\">%description%</div><div class=\"right\"><div class=\"task__time\">%time% mins</div><div class=\"task__day\">%day%</div><div class=\"task__percentage\">%percentage%</div><div class=\"task__delete\"><button class=\"item__delete--btn\"><i class=\"far fa-times-circle\"></i></button></div></div></div>';\r\n\t\t\t} else {\r\n\t\t\t\telement = DOMstrings.teachingList;\r\n\t\t\t\thtml = '<div class=\"task__list\" id=\"teaching-%id%\"><div class=\"task__description\">%description%</div><div class=\"right\"><div class=\"task__time\">%time% mins</div><div class=\"task__day\">%day%</div><div class=\"task__percentage\">%percentage%</div><div class=\"task__delete\"><button class=\"item__delete--btn\"><i class=\"far fa-times-circle\"></i></button></div></div></div>';\r\n\t\t\t}\r\n\t\t\t// replace html with all the values\r\n\t\t\tnewHTML = html.replace('%id%', obj.id);\r\n\t\t\tnewHTML = newHTML.replace('%description%', obj.description);\r\n\t\t\tnewHTML = newHTML.replace('%time%', obj.time);\r\n\t\t\tnewHTML = newHTML.replace('%day%', obj.day);\r\n\t\t\tnewHTML = newHTML.replace('%percentage%', obj.percentage + '%');\r\n\r\n\t\t\t//finally add it to the document with insert adjacentHTML\r\n\t\t\tdocument.querySelector(element).insertAdjacentHTML('beforeend', newHTML);\r\n\t\t},\r\n\r\n\t\tdeleteTaskList: function(ID) {\r\n\r\n\t\t\t// we need to use the removeChild so from the element we need to go up in the DOM\r\n\t\t\t// ----------- long way of doing it -------------- document.getElementById(ID).parentNode.removeChild(document.getElementById(ID))\r\n\t\t\tvar el = document.getElementById(ID);\r\n\t\t\tel.parentNode.removeChild(el);\r\n\r\n\r\n\t\t},\r\n\r\n\t\tclearFields: function() {\r\n\t\t\tvar fields, fieldsArr;\r\n\t\t\t// this selects the fields on the page\r\n\t\t\tfields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputTime);\r\n\t\t\t// new ES6 method that turns them into an array\r\n\t\t\tfieldsArr = Array.from(fields);\r\n\t\t\t// empties the fields\r\n\t\t\tfieldsArr.forEach(cur => cur.value = \"\"); \r\n\r\n\t\t\tfieldsArr[0].focus();\r\n\r\n\t\t},\r\n\r\n\t\tdisplayOverallPercentages: function(obj) {\r\n\t\t\tdocument.querySelector(DOMstrings.overallPer).textContent = (obj.overall) + '%';\r\n\t\t\tdocument.querySelector(DOMstrings.progPerc).textContent = (obj.programming) + '%';\r\n\t\t\tdocument.querySelector(DOMstrings.spanPerc).textContent = (obj.spanish) + '%';\r\n\t\t\tdocument.querySelector(DOMstrings.teachPerc).textContent = (obj.teaching) + '%';\r\n\r\n\t\t}\r\n\t};\r\n\r\n\r\n})();\r\n\r\nvar controller = (function(taskCtrl, UICtrl) {\r\n\r\n\tvar setupEventListeners = function () {\r\n\r\n\t\tvar DOM = UICtrl.getDOMstrings();\r\n\r\n\t\tdocument.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);\r\n\r\n\t\tdocument.addEventListener('keypress', function(event){\r\n\t\t\tif(event.keyCode === 13 || event.which === 13) {\r\n\t\t\t\tctrlAddItem();\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tdocument.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);\r\n\t};\r\n\r\n\tvar updatePercentages = function () {\r\n\r\n\t\t// 1. calculate amount of minutes\r\n\t\ttaskCtrl.calculatePercentageTotals();\r\n\r\n\t\t// 2. return percentages\r\n\t\tvar percent = taskCtrl.displayPercentages(); \r\n\r\n\t\t// 2. display percentage on the UI\r\n\t\tUICtrl.displayOverallPercentages(percent);\r\n\r\n\t}\r\n\r\n\t\r\n\tvar ctrlAddItem = function () {\r\n\t\t// 1. get the input data\r\n\t\tinput = UICtrl.getInput();\r\n\r\n\t\tdata.goals.programming = parseFloat(input.programmingGoal * 60);\r\n\t\tdata.goals.spanish = parseFloat(input.spanishGoal * 60);\r\n\t\tdata.goals.teaching = parseFloat(input.teachingGoal * 60);\r\n\t\t\r\n\t\tif (data.goals[input.type] === 0) {\r\n\t\t\talert(`Please set weekly goal for ${input.type}`);\r\n\t\t} else {\r\n\t\t\tvar input, newTask;\r\n\r\n\t\t\tif (input.description != \"\" && !isNaN(input.time) && input.time > 0) {\r\n\t\t\t\t// 2. add item to task controller (data structure - classes)\t\t\t\r\n\t\t\t\tnewTask = taskController.addTask(input.type, input.day, input.description, input.time);\r\n\r\n\t\t\t\t// 3. calculate and update new percentages\r\n\t\t\t\tupdatePercentages();\r\n\r\n\t\t\t\t// 4. add item to UI\r\n\t\t\t\tUICtrl.addTaskList(newTask, input.type);\r\n\t\t\t\t\r\n\t\t\t\t// 5. clear the input fields\r\n\t\t\t\tUICtrl.clearFields();\r\n\t\t\t}\r\n\t\t}\r\n\t\t\t\t\r\n\t};\r\n\r\n\tvar ctrlDeleteItem = function(event) {\r\n\t\tvar itemID;\r\n\t\t// you need to count how much to traverse up the DOM with parentNode\r\n\t\titemID = event.target.parentNode.parentNode.parentNode.parentNode.id;\r\n\r\n\t\tif (itemID) {\r\n\r\n\t\t\t// seperate the id of element into type of task and individual ID\r\n\t\t\tsplitID = itemID.split('-');\r\n\t\t\ttype = splitID[0];\r\n\t\t\tID = parseInt(splitID[1]);\r\n\t\t\t\r\n\t\t\t// remove from data structure\r\n\t\t\ttaskCtrl.deleteTask(type, ID);\r\n\t\t\t// reomve from UI\r\n\t\t\tUICtrl.deleteTaskList(itemID);\r\n\t\t\t// update task percentages\r\n\t\t\tupdatePercentages();\r\n\t\t}\r\n\r\n\r\n\t};\r\n\r\n\treturn {\r\n\t\tinit: function() {\r\n\t\t\tconsole.log('It has started')\r\n\t\t\tsetupEventListeners();\r\n\t\t\tUICtrl.getTime();\r\n\t\t\t\r\n\t\t}\r\n\t};\r\n\r\n})(taskController, UIController);\r\n\r\ncontroller.init();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! exports provided: funct, funct2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"funct\", function() { return funct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"funct2\", function() { return funct2; });\nconst funct = () => {\r\n    console.log('hello');\r\n}\r\n\r\nconst funct2 = () => {\r\n    console.log('hello again')\r\n}\n\n//# sourceURL=webpack:///./src/js/test.js?");

/***/ })

/******/ });