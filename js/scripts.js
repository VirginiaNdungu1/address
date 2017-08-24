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
