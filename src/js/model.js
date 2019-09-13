export let data = {
	allTasks: {
		programming: [],
		spanish: [],
		teaching: []
	},
	timeTotals: {
		programming: 0,
		spanish: 0,
		teaching: 0
	},
	percentTotals: {
		programming: 0,
		spanish: 0,
		teaching: 0
	},
	goals: {
		programming: 0,
		spanish: 0,
		teaching: 0
	},
	totalPercentage: 0,
}

class Programming {
    constructor (id, day, description, time) {
        this.id = id;
        this.day = day;
        this.description = description;
        this.time = time;
        this.percentage = -1;
    }

    calculatePercentage () {
        this.percentage = Math.round(this.time / data.goals.programming * 100);
    }
}

class Spanish {
    constructor (id, day, description, time) {
        this.id = id;
        this.day = day;
        this.description = description;
        this.time = time;
        this.percentage = -1;
    }

    calculatePercentage () {
        this.percentage = Math.round(this.time / data.goals.spanish * 100);
    }

}

class Teaching {
    constructor (id, day, description, time) {
        this.id = id;
        this.day = day;
        this.description = description;
        this.time = time;
        this.percentage = -1;
    }	

    calculatePercentage () {
        this.percentage = Math.round(this.time / data.goals.teaching * 100);
    }	
}

const calculateTotal = type => {
    let sum = 0;
    data.allTasks[type].forEach(cur => {
        sum += cur.time;
    }, 0);

    data.timeTotals[type] = sum;
    return sum;
};


const obj_arr = [
    data.allTasks.programming,
    data.allTasks.spanish,
    data.allTasks.teaching
];

const getTaskPercentages = () => {
    function calcPerc(x){
        x.forEach(cur => {
            cur.calculatePercentage();
        });
    }
    for (var i = 0; i < obj_arr.length; i++){
            calcPerc(obj_arr[i]);
    }
};

const getGroupPercentages = type => {
    let sum = 0;
    data.allTasks[type].forEach(function(cur){
        sum += cur.percentage;
    });

    data.percentTotals[type] = sum;
    return sum;
};

const getOverallPercentage = () => {

        const goals = data.goals.programming + data.goals.spanish + data.goals.teaching;
        const totals = data.timeTotals.programming + data.timeTotals.spanish + data.timeTotals.teaching;
            
        const overallPercentage = Math.round((totals / goals) * 100);

        data.totalPercentage = overallPercentage;
        return overallPercentage;     
};



export const addTask = (type, day, description, time) => {
        var newTask, ID;

        if (data.allTasks[type].length > 0) {
            ID = data.allTasks[type][data.allTasks[type].length -1].id + 1;
        } else {
            ID = 0;
        }
        
        if (type === 'programming') {
            newTask = new Programming(ID, day, description, time); 
        } else if (type === 'spanish') {
            newTask = new Spanish(ID, day, description, time);
        } else {
            newTask = new Teaching(ID, day, description, time);
        }

        data.allTasks[type].push(newTask);

        return newTask;
    }

export const deleteTask = (type, id) => {
    let ids, index;

    // get all the ids of the elements in the array
    ids = data.allTasks[type].map(current => {
        return current.id;
    });

    // find the index in the array of the selected id
    index = ids.indexOf(id);

    // use splice to get rid of element in the array
    if (index != -1) {
        data.allTasks[type].splice(index, 1);
    }

}

export const calculatePercentageTotals = () => {

    // calculate total minutes of tasks
    calculateTotal('programming');
    calculateTotal('spanish');
    calculateTotal('teaching');

    // get percentages of each task
    getTaskPercentages();
    
    // get total percentage by task
    getGroupPercentages('programming');
    getGroupPercentages('spanish');
    getGroupPercentages('teaching');
    // work out total percentage of all goals done
    getOverallPercentage();

}	

export const displayPercentages = () => {
    return {
        overall: data.totalPercentage,
        programming: data.percentTotals.programming,
        spanish: data.percentTotals.spanish,
        teaching: data.percentTotals.teaching,
    }
}	

