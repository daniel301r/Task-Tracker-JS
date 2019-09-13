export const DOMstrings = {
    inputType: '.select.type',
    inputDay: '.select.day',
    inputDescription: '.select.description',
    inputTime: '.select.time',
    inputBtn: '.add__btn',
    programmingList: '.programming.list',
    spanishList: '.spanish.list',
    teachingList: '.teaching.list',
    programmingGoal: '.programmingGoalInput',
    spanishGoal: '.spanishGoalInput',
    teachingGoal: '.teachingGoalInput',
    overallPer: '.overall__percentage',
    progPerc: '.programming__total',
    spanPerc: '.spanish__total',
    teachPerc: '.teaching__total',
    container: '.task__container',
    weekDate: '.week__date'
}

export const getInput = () => {
    return {
        type: document.querySelector(DOMstrings.inputType).value,
        day: document.querySelector(DOMstrings.inputDay).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        time: parseFloat(document.querySelector(DOMstrings.inputTime).value), 
        programmingGoal: document.querySelector(DOMstrings.programmingGoal).value,
        spanishGoal: document.querySelector(DOMstrings.spanishGoal).value,
        teachingGoal: document.querySelector(DOMstrings.teachingGoal).value,
    }
}

export const getTime = () => {
        let dateObj = new Date;

        document.querySelector(DOMstrings.weekDate).innerHTML = `${dateObj.toDateString()}`
}

export const addTaskList = (obj, type) => {
        // create variables for element, html, newHTML
        let element, html, newHTML;

        //if depending on what type it is and the element that needs to be selected - also the html code to be put it
        if (type === 'programming') {
            element = DOMstrings.programmingList;
            html = '<div class="task__list" id="programming-%id%"><div class="task__description">%description%</div><div class="right"><div class="task__time">%time% mins</div><div class="task__day">%day%</div><div class="task__percentage">%percentage%</div><div class="task__delete"><button class="item__delete--btn"><i class="far fa-times-circle"></i></button></div></div></div>';
        } else if (type === 'spanish') {
            element = DOMstrings.spanishList;
            html = '<div class="task__list" id="spanish-%id%"><div class="task__description">%description%</div><div class="right"><div class="task__time">%time% mins</div><div class="task__day">%day%</div><div class="task__percentage">%percentage%</div><div class="task__delete"><button class="item__delete--btn"><i class="far fa-times-circle"></i></button></div></div></div>';
        } else {
            element = DOMstrings.teachingList;
            html = '<div class="task__list" id="teaching-%id%"><div class="task__description">%description%</div><div class="right"><div class="task__time">%time% mins</div><div class="task__day">%day%</div><div class="task__percentage">%percentage%</div><div class="task__delete"><button class="item__delete--btn"><i class="far fa-times-circle"></i></button></div></div></div>';
        }
        // replace html with all the values
        newHTML = html.replace('%id%', obj.id);
        newHTML = newHTML.replace('%description%', obj.description);
        newHTML = newHTML.replace('%time%', obj.time);
        newHTML = newHTML.replace('%day%', obj.day);
        newHTML = newHTML.replace('%percentage%', obj.percentage + '%');

        //finally add it to the document with insert adjacentHTML
        document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    }

export const deleteTaskList = ID => {
    const el = document.getElementById(ID);
    el.parentNode.removeChild(el);
}

export const clearFields = () => {
    let fields, fieldsArr;
    // this selects the fields on the page
    fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputTime);
    // ES6 method that turns them into an array
    fieldsArr = Array.from(fields);
    // empties the fields
    fieldsArr.forEach(cur => cur.value = ""); 

    fieldsArr[0].focus();
}

export const displayOverallPercentages = (obj) => {
    document.querySelector(DOMstrings.overallPer).textContent = (obj.overall) + '%';
    document.querySelector(DOMstrings.progPerc).textContent = (obj.programming) + '%';
    document.querySelector(DOMstrings.spanPerc).textContent = (obj.spanish) + '%';
    document.querySelector(DOMstrings.teachPerc).textContent = (obj.teaching) + '%';
}
	

