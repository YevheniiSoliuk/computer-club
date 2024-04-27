import { BASE_URL, ONE_DAY_IN_MS } from "../constants";

export async function bookDate() {
  const emailInput = document.querySelector('#email');
  const nameInput = document.querySelector('#name');
  const dateInput = document.querySelector('#date');
  const nameRegexp = new RegExp(/^[a-z ,.'-]+$/i);
  const emailRegexp = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const today = new Date(new Date().setMinutes(new Date().getMinutes() - 2));
  const emailErrorNode = document.querySelector('#email-error');
  const nameErrorNode = document.querySelector('#name-error');
  const dateErrorNode = document.querySelector('#date-error');
  const infoTextNode = document.querySelector('#info-text');
  let errors = 0;

  if (emailInput.value === "") {
    emailErrorNode.innerHTML = "Email is required";
    errors = 1;
  } else if (!emailRegexp.test(emailInput.value)) {
    emailErrorNode.innerHTML = "Email is incorrect";
    errors = 1;
  } else {
    emailErrorNode.innerHTML = "";
  }

  if (nameInput.value === "") {
    nameErrorNode.innerHTML = "Name is required";
    errors = 1;
  } else if (!nameRegexp.test(nameInput.value)) {
    nameErrorNode.innerHTML = "Name is incorrect";
    errors = 1;
  } else {
    nameErrorNode.innerHTML = "";
  }

  if (dateInput.value === "") {
    dateErrorNode.innerHTML = "Date is required";
    errors = 1;
  } else if (today.getTime() - new Date(dateInput.value).getTime() > ONE_DAY_IN_MS) {
    dateErrorNode.innerHTML = "You can not book date before today";
    errors = 1;
  } else {
    dateErrorNode.innerHTML = "";
  }

  if (errors === 1) {
    return;
  }

  try {
    await fetch(`${BASE_URL}/book-date`, {
      method: "POST",
      body: JSON.stringify({
        email: emailInput.value,
        name: nameInput.value,
        date: new Date(dateInput.value),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    infoTextNode.innerText = 'Date has been successfuly booked';
    setTimeout(() => {
      infoTextNode.innerText = '';
    }, 500);
    if (infoTextNode.classList.contains('error')) {
      infoTextNode.classList.replace('error', 'success');
    }

    emailInput.value = '';
    nameInput.value = '';
    dateInput.value = '';
  } catch (error) {
    infoTextNode.innerText = error;
    
    if (infoTextNode.classList.contains('success')) {
      infoTextNode.classList.replace('success', 'error');
    }
  }
}