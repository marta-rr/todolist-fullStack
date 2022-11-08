import $ from 'jquery';

import {
  indexTasks,
  postTask,
  deleteTask,
  markTaskComplete,
  markTaskActive,
  displayAllTasks
} from "./requests.js";


$(document).on("turbolinks:load", function () {
  if ($('.static_pages.index').length > 0) {
    indexTasks(displayAllTasks);
  }
});

$(document).on('submit', '#create-task', function (e) {
  postTask($('#new-task-content').val(), function () {
    $('#new-task-content').val('');
    indexTasks(displayAllTasks);
  });
});

$(document).on('click', '.delete', function () {
  deleteTask($(this).data('id'), setTimeout(function() { indexTasks(displayAllTasks); }, 100));
});

$(document).on('click', '.mark-complete', function () {
  if (this.checked) {
    markTaskComplete($(this).data('id'));
  } else {
    markTaskActive($(this).data('id'));
  }
});