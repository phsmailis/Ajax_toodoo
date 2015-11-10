// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready(){
  console.log("document");
  $('#new_task').on('ajax:success', function(evt, data) {
    // window.location.reload();
    $('body').append(data);
    $('#task_name').val("");
  }).on("ajax:error", function() { alert("Oops!"); });
}

$(document).on('ready page:load', ready);
