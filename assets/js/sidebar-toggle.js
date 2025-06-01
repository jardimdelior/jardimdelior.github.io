document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('sidebar-logo');
  const sidebar = document.querySelector('.sidebar');

  // Restore sidebar collapsed state if saved in localStorage
  if (localStorage.getItem('sidebarCollapsed') === 'true') {
    sidebar.classList.add('collapsed');
  }

  if (logo && sidebar) {
    logo.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
  }
});