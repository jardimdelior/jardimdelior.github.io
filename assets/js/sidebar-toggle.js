document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('sidebar-logo');
  const sidebar = document.querySelector('.sidebar');

  if (logo && sidebar) {
    logo.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
});