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

function updateFormState() {
  if (storageAdults) {
    adults.value = storageAdults;
    child.focus();
  }
  if (storageAdults && storageChild) {
    child.value = storageChild;
    dateArr.focus();
  }
}

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

  updateFormState();

  if (!storageAdults) {
    adults.focus();
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
