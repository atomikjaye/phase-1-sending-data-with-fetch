// Add your code here
const p = document.querySelector('#info')

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })

  })
    .then(res => res.json())
    .then(user => {
      p.textContent = user.id
    })
    .catch(err => {
      p.textContent = err.message
    })
}
