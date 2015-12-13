var React = require('react');
var Reflux = require('reflux');
//var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/Actions.jsx');

function getTasksFromLocalStorage() {
   var initialTasks = JSON.parse(localStorage.tasks);

   console.log("initialTasks", initialTasks);

   var rows = [];
   for (var task in initialTasks) {
     if (initialTasks[task] == null ) {
       console.log("null task is null")
       initialTasks.splice(task, 1);
     }
   }

   return initialTasks
 };

 function saveToLocalStorage(tasks) {
   console.log("Saving to localStorage :");
   localStorage.tasks = JSON.stringify(tasks);
   console.log(localStorage.tasks);
 }

module.exports = Reflux.createStore({
//  mixins: [StateMixin.store],
  listenables: Actions,

  tasks : getTasksFromLocalStorage(),
  // tasks: [
  //   {
  //     id: "task1",
  //     text: "buy sofia's christmas gift"
  //   },
  //   {
  //     id: "task2",
  //     text: "pay them bills"
  //   }
  // ],

  getInitialState: function() {
    // tasks definition above overides what this returns on first load. So these two don't work here:
    // return JSON.parse(localStorage.tasks);
    // return getTasksFromLocalStorage();

    return this.tasks
  },


  // componentDidUpdate: function(prevProps, prevState) {
  //   console.log("hello 1")
  //   localStorage.tasks = JSON.stringify(this.tasks);
  //   console.log(localStorage.tasks);
  // },

  addTask: function(taskname){

    console.log('Action: addtask');

    console.log("this.tasks", this.tasks);

    var counter = this.tasks.length + 1;
    this.tasks.push({id: "task" + counter, text:taskname});
    this.trigger(this.tasks);

    saveToLocalStorage(this.tasks);
  },

  deleteTask: function(){
    console.log('Store says decrement');
    this.counter--;
    this.trigger(this.counter);
  }

});
