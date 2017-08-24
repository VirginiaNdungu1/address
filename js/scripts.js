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
Addresses.prototype.fullAddress = function() {
  return this.street + " " + this.city + " " + this.county;
}
// reset the fields
function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-county").val("");
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
  //
  $("form#newContact").submit(function(event) {
    event.preventDefault();
    var userFirstName = $("input#new-firstName").val();
    var userLastName = $("input#new-lastName").val();
    var newContact = new Contact(userFirstName, userLastName);
    //  loop through the address form fields to collect the address data.
    $(".new-address").each(function() {
      var inputStreet = $(this).find("input.new-street").val();
      var inputCity = $(this).find("input.new-city").val();
      var inputCounty = $(this).find("input.new-county").val();
      // Create an object newAddress of type Addresses
      var newAddress = new Addresses(inputStreet, inputCity, inputCounty);
      newContact.addresses.push(newAddress);
    });
    $("ul#contacts").append("<li><span class='contact'> " + newContact.fullName() + "</span></li>");
    //shows contact when it is clicked.
    $(".contact").last().click(function() {
      $("#showContacts").show();
      $("#showContacts h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("#addresses").text("");
      newContact.addresses.forEach(function(address) {
        // $("ul#addresses").append("<li>" + address.street + "," + address.city + " " + address.county + "</li>")
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>")
      });
    });
    $("input#new-firstName").val("");
    $("input#new-lastName").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-county").val("");
  });
  resetFields();
});
