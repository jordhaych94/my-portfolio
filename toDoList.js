document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('addTaskButton');
  const textInput = document.getElementById('textInput');
  const taskList = document.getElementById('taskList');
  const statusAnnouncer = document.querySelector('[aria-live="polite"]');

  function createTask() {
    const taskText = textInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    const item = document.createElement('li');
    const uniqueId = 'task-' + Date.now();

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = uniqueId;
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', () => {
      item.classList.toggle('completed');
    });

    const label = document.createElement('label');
    label.htmlFor = uniqueId;
    label.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.setAttribute('aria-label', `Remove ${taskText}`);
    removeButton.addEventListener('click', () => {
      taskList.removeChild(item);
      statusAnnouncer.textContent = `Task "${taskText}" removed.`;
    });

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(removeButton);
    taskList.appendChild(item);

    textInput.value = '';
    textInput.focus();
    statusAnnouncer.textContent = `Task "${taskText}" added.`;
  }

  addTaskButton.addEventListener('click', createTask);
});