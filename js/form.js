const KEY_CODE_ESC = 27;
const CLASS_HIDDEN = "form-search--hidden";
const CLASS_ERROR = "form-search--error";
const form = document.querySelector(".form-search");
const adults = form.querySelector("[name=adults]");
const child = form.querySelector("[name=child]");
const dateArr = form.querySelector("[name=date-arrival]");
const storageAdults = localStorage.getItem("adults");
const storageChild = localStorage.getItem("child");

toggleFormVisibility();
addEventListenerToElements();

function toggleFormVisibility() {
  form.classList.toggle(CLASS_HIDDEN);
}

function addEventListenerToElements() {
  document.querySelector(".btn__search").addEventListener("click", toggleAndSetForm);
  form.addEventListener("submit", submitForm);
  window.addEventListener("keydown", keydownForm);
}

function toggleAndSetForm(evt) {
  evt.preventDefault();
  form.classList.remove(CLASS_ERROR);
  form.classList.toggle(CLASS_HIDDEN);

  if (storageAdults) {
    adults.value = storageAdults;
    child.focus();
  } else {
    adults.focus();
  }

  // this condition took care by the above condition.
  if (storageAdults && storageChild) {
    adults.value = storageAdults;
    child.value = storageChild;
    dateArr.focus();
  }

}

function submitForm(evt) {
  if (!adults.value || !child.value) {
    evt.preventDefault();
    form.classList.remove(CLASS_ERROR);
    form.classList.add(CLASS_ERROR);
  } else if (localStorage) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("child", child.value);
  }
}

function keydownForm(evt) {
  if (evt.keyCode === KEY_CODE_ESC) {
    evt.preventDefault();
    if (form.classList.contains(CLASS_HIDDEN)) {
      form.classList.remove(CLASS_HIDDEN);
      form.classList.remove(CLASS_ERROR);
    }
  }
}
