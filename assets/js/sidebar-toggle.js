document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('sidebar-logo');
  const sidebar = document.querySelector('.sidebar');

  if (logo && sidebar) {
    logo.addEventListener('click', () => {
      // Remove "revealed" and add "collapsing"
      sidebar.classList.remove('revealed');
      sidebar.classList.add('collapsing');

      // Toggle collapsed state
      sidebar.classList.toggle('collapsed');

      // Wait for collapse transition (e.g., 2.9s) then reveal text
      setTimeout(() => {
        sidebar.classList.remove('collapsing');
        sidebar.classList.add('revealed');
      }, 2900); // Match your CSS transition duration
    });
  }
});