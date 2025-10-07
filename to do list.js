function filterTasks(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  return state.tasks.filter(task =>
    task.title.toLowerCase().includes(term) ||
    task.description.toLowerCase().includes(term)
  );
}

function renderTasks() {
  const searchInput = document.getElementById('task-search-input');
  const searchTerm = searchInput ? searchInput.value : '';
  const filteredTasks = filterTasks(searchTerm);

  const appContainer = document.getElementById('task-list');
  appContainer.innerHTML = `
    <h2 class="page-title animated fadeInRight">Your Tasks</h2>
    <ul class="task-list">
      ${filteredTasks.map(task => `
        <li class="task-item">
          <h4>${task.title}</h4>
          <p>${task.description}</p>
        </li>
      `).join('')}
    </ul>
    ${filteredTasks.length === 0 ? '<p>No tasks match your search.</p>' : ''}
  `;

  document.getElementById('task-search-input')?.addEventListener('input', renderTasks);
}
