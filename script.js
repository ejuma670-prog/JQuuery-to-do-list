$(document).ready(function () {

  $("#add").click(function () {
    let task = $("#task").val();

    if (task !== "") {
      $("#list").append(
        "<li>" +
          "<span class='text'>" + task + "</span>" +
          "<button class='delete'>X</button>" +
        "</li>"
      );

      $("#task").val("");
    }
  });

  // Mark task as done
  $(document).on("click", ".text", function () {
    $(this).toggleClass("done");
  });

  // Delete task
  $(document).on("click", ".delete", function () {
    $(this).parent().fadeOut(300, function () {
      $(this).remove();
    });
  });

});