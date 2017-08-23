//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
// user interface logic

$(document).ready(function() {
  $("form#newContact").submit(function(event) {
    event.preventDefault();
    var userFirstName = $("input#new-firstName").val();
    var userLastName = $("input#new-lastName").val();
    var newContact = new Contact(userFirstName, userLastName);

    $("ul#contacts").append("<li><span class='contact'> " + newContact.fullName() + "</span></li>");
    //shows contact when it is clicked.
    $(".contact").last().click(function() {
      $("#showContacts").show();
      $("#showContacts h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
    $("input#new-firstName").val("");
    $("input#new-lastName").val("");
  });
});
