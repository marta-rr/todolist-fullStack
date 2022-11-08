import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var deleteTask = function (taskID, successCB, errorCB) {
  var request = {
    type: 'DELETE',
    url: 'api/tasks/' + taskID +'?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var markTaskComplete = function (taskID, successCB, errorCB) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + taskID + '/mark_complete?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var markTaskActive = function (taskID, successCB, errorCB) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + taskID + '/mark_active?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var displayAllTasks = function (response) {
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 mb-3 p-2 border rounded task'>" +
      "<input type='checkbox' class='mark-complete mr-2' data-id='" + task.id + "'" + (task.completed ? "checked" : "") + ">" +
      "<p class='task-content d-inline'>" + task.content + "</p>" +
      "<button class='delete float-right' data-id='" + task.id + "'>Delete</button>" +
    "</div>";
  });

  $("#tasks").html(htmlString);
};
