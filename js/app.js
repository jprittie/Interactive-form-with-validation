//1. Initialize global variables


//2. When the page loads, give focus to the first text field
$(function(){
  $("#name").focus();
});

/* 3. Job Role section:
When "Other" option is selected, add text input field with id "other-title"
and placeholder text "Your Title" */
$("#title").change(function(){
    if ($("#title").val() == "other") {
      $("#title").after($("<input type='text' id='other-title' placeholder='Your Title'>"));
    } else {
      $("#other-title").remove();
    }
});

/* 4. T-Shirt Info section:
For T-Shirt color menu, only display the options that match the design selected in the "Design" menu.
If the user selects "Theme - JS Puns" then the color menu
should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
If the user selects "Theme - I ♥ JS" then the color menu
should only display "Tomato," "Steel Blue," and "Dim Grey."
*/
// Should I disable colour selection until theme is chosen?
// Make initial text of Colour dropdown "Select Colour"
$("option[value='cornflowerblue']").before($("<option selected>Select Colour</option>"));

$("#design").change(function(){
    if ($("#design").val() == "js puns") {
        // clear current colour dropdown
        $("#color").children().remove();
        // add available colours
        $("#color").append($("<option selected>Select Colour</option>"));
        $("#color").append($("<option value='cornflowerblue'>Cornflower Blue</option>"));
        $("#color").append($("<option value='darkslategrey'>Dark Slate Grey</option>"));
        $("#color").append($("<option value='gold'>Gold</option>"));
    } else {
        // clear current colour dropdown
        $("#color").children().remove();
        // add available colours
        $("#color").append($("<option selected>Select Colour</option>"));
        $("#color").append($("<option value='tomato'>Tomato</option>"));
        $("#color").append($("<option value='steelblue'>Blue Steel</option>"));
        $("#color").append($("<option value='dimgrey'>Dim Grey</option>"));
    }
})

/* 5. Register for Activities section
Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.*/
$(":checkbox").change(function(){
    if ($("input[name='js-frameworks']").is(":checked")) {
      $("#conflict").remove();
      // could gray-out colour of workshop label
      $("input[name='express']").attr("disabled", true);
      $("input[name='express']").parent().after("<p id='conflict' class='conflict'>This workshop conflicts with your current selection.</p>");
    } else {
      $("#conflict").remove();
      $("input[name='express']").attr("disabled", false);
    }

   if ($("input[name='express']").is(":checked")) {
      $("#js-frameworks").remove();
      $("input[name='js-frameworks']").attr("disabled", true);
      $("input[name='js-frameworks']").parent().after("<p id='js-frameworks' class='conflict'>This workshop conflicts with your current selection.</p>");
    } else {
      $("#js-frameworks").remove();
      $("input[name='js-frameworks']").attr("disabled", false);
    }

    if ($("input[name='js-libs']").is(":checked")) {
      $("#node").remove();
      $("input[name='node']").attr("disabled", true);
      $("input[name='node']").parent().after("<p id='node' class='conflict'>This workshop conflicts with your current selection.</p>");
    } else {
      $("#node").remove();
      $("input[name='node']").attr("disabled", false);
    }

    if ($("input[name='node']").is(":checked")) {
      $("#js-libs").remove();
      $("input[name='js-libs']").attr("disabled", true);
      $("input[name='js-libs']").parent().after("<p id='js-libs' class='conflict'>This workshop conflicts with your current selection.</p>");
    } else {
      $("#js-libs").remove();
      $("input[name='js-libs']").attr("disabled", false);
    }

})

/* 6. Cost of actvities
As a user selects activities to register for, a running total is listed below the list of checkboxes. For example, if the user selects "Main conference" then Total: $200 should appear. If they add 1 workshop the total should change to Total: $300. */
