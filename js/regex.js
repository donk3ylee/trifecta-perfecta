const inputs = document.getElementsByClassName("contact-form-input");
const email = document.getElementById("order-client-email");
const message = document.getElementById("order-message");
const phone = document.getElementById("order-client-telephone");
const emptyREGEX = /^[a-zA-Z0-9]+$/;
const messageREGEX = /^[a-zA-Z0-9]+\\p{Punct}+\\s{Space}+$/;
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
  } else if (this == message) {
    this.classList.add("Form-valid")
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

// document.getElementById("contact-form-submit").addEventListener("click", function validateForm() {
  
// }) 