document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('sidebar-logo');
  const sidebar = document.querySelector('.sidebar');

  if (logo && sidebar) {
    logo.addEventListener('click', () => {
      // Reset transition helper classes
      sidebar.classList.remove('ready');

      // Trigger fade out
      sidebar.classList.add('collapsing');

      // Toggle collapsed after a tiny delay
      setTimeout(() => {
        sidebar.classList.toggle('collapsed');
      }, 100); // Give it a breath before collapsing

      // Remove "collapsing", add "ready" after transition
      setTimeout(() => {
        sidebar.classList.remove('collapsing');
        sidebar.classList.add('ready');
      }, 2900); // Match this with the CSS transition time
    });
  }
});