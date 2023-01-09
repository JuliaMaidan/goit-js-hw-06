const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()
  
  let data = [];

const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!")
  } else {
    data.push({email: email.value, password: password.value})
    console.log(data)

    event.currentTarget.reset();
  }
}


