const inputs = document.getElementsByClassName("contact-form-input");
const email = document.getElementById("order-client-email");
const message = document.getElementById("order-message");
const phone = document.getElementById("order-client-telephone");
const first = document.getElementById("order-first-name");
const last = document.getElementById("order-last-name");
const subject = document.getElementById("order-subject");
const emptyREGEX = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_.,!"'\?]+)*$/;
const emailREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$/;
const phoneREGEX = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

$(inputs).focus(function() {
  this.classList.add("Form-focused");
}).blur(function() {
  this.classList.remove("Form-focused");
  this.classList.remove("Form-valid");
  this.classList.remove("Form-invalid");
  if (this == email) {
    if (emailREGEX.test(this.value) == false) {
      this.classList.add("Form-invalid")
    } else {
      this.classList.add("Form-valid")
    }
  } else if (this == phone) {
      if (phoneREGEX.test(this.value) == false) {
        this.classList.add("Form-invalid")
      } else {
        this.classList.add("Form-valid")
      }} else if (emptyREGEX.test(this.value) == false) {
    this.classList.add("Form-invalid") } else {
    this.classList.add("Form-valid")
  }
});

document.getElementById("order-submit").addEventListener("click", function () {
 if (email.classList.contains("Form-valid") == true && message.classList.contains("Form-valid") == true && phone.classList.contains("Form-valid") == true && first.classList.contains("Form-valid") == true && last.classList.contains("Form-valid") == true && subject.classList.contains("Form-valid") == true) {
    document.getElementById("order-form").reset();
    first.classList.remove("Form-valid");
    last.classList.remove("Form-valid");
    email.classList.remove("Form-valid");
    phone.classList.remove("Form-valid");
    subject.classList.remove("Form-valid");
    message.classList.remove("Form-valid");
 } else {
  alert("Please fill the form in completely.");
 }

}) 