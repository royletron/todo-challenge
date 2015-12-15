var React = require('react');
var Reflux = require('reflux');
//var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/Actions.jsx');

module.exports = Reflux.createStore({
//  mixins: [StateMixin.store],
  listenables: Actions,

  tasks : initializeTasks(),
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

    var counter = this.tasks.length + 1;
    this.tasks.push({id: "task" + counter, text:taskname});

    this.updateTasks(this.tasks);
  },

  deleteTask: function(){
    this.updateTasks(this.tasks);
  },

  updateTasks: function(tasks){
    console.log("Updating Tasks");
    localStorage.tasks = JSON.stringify(tasks);
    console.log("Saved to localStorage :", localStorage.tasks);

    this.tasks = tasks;
    this.trigger(tasks);
  }

});

function initializeTasks() {
  console.log("Initializing tasks");
  return getTasksFromLocalStorage();
}

function getTasksFromLocalStorage() {
   var localStorageTasks = [];

   if (localStorage.tasks != undefined) {
     localStorageTasks = JSON.parse(localStorage.tasks);
   }

   console.log("Local storage tasks", localStorageTasks);

   var rows = [];
   for (var task in localStorageTasks) {
     if (localStorageTasks[task] == null ) {
       console.log("null task is null")
       localStorageTasks.splice(task, 1);
     }
   }

   return localStorageTasks
 }
