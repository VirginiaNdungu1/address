//business logic
//create Contact constructor
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
//create Addresses constructor
function Addresses(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}
// user interface logic

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
      '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input type="text" class="form-control new-city">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-county">County</label>' +
      '<input type="text" class="form-control new-county">' +
      '</div>' +
      '</div>');
  });

  $("form#newContact").submit(function(event) {
    event.preventDefault();
    var userFirstName = $("input#new-firstName").val();
    var userLastName = $("input#new-lastName").val();
    var newContact = new Contact(userFirstName, userLastName);
    var jane = new Contact("Jane", "Njeri");
    console.log(jane);
    var home = new Addresses("671 Ngong Road", "Nairobi", "Nairobi");
    console.log(home);
    jane.addresses.push(home);
    console.log(jane);
    console.log(jane.addresses);

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
