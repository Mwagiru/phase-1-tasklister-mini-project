document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementsByTagName('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const list = document.createElement('li')
    list.textContent = e.target.new_task_description.value

    const ul = document.getElementById('tasks')
    ul.appendChild(li)

    form.reset()

  })
});
