const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!")
  } else {
    // console.log(`Email: ${email.value}, Password: ${password.value}`)
    const formData = new FormData(event.currentTarget)
    formData.forEach((value, name) => {
        console.log('Input type', name )
        console.log(`${name} value`, value)
    
        event.currentTarget.reset();
    });
  }
}


