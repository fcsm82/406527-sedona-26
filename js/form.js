var btn = document.querySelector(".btn__search");

var form = document.querySelector(".form-search");

var adults = form.querySelector("[name=adults]");
var child = form.querySelector("[name=child]");
var dateArr = form.querySelector("[name=date-arrival]");

var isStorageSupport = true;
var storageAdults = "";
var storageChild = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChild = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

form.classList.toggle("form-search--hidden");

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.remove("form-search--error");
  form.classList.toggle("form-search--hidden");

  if (storageAdults) {
    adults.value = storageAdults;
    child.focus();
  } else {
    adults.focus();
  }

  if (storageAdults && storageChild) {
  adults.value = storageAdults;
  child.value = storageChild;
  dateArr.focus();

  } else if (storageAdults) {
    adults.value = storageAdults;
    child.focus();
  } else {
    adults.focus();
  }

});


form.addEventListener("submit", function(evt) {
  if (!adults.value || !child.value) {
    evt.preventDefault();
    form.classList.remove("form-search--error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-search--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("child", child.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("form-search--hidden")) {
      form.classList.remove("form-search--hidden");
      form.classList.remove("form-search--error");
    }
  }
});
