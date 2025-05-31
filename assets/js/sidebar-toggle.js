<script src="{{ '/assets/js/sidebar-toggle.js' | relative_url }}"></script>
// sidebar-toggle.js

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('sidebar-logo');
  const sidebar = document.querySelector('.sidebar');

  if (logo && sidebar) {
    logo.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
});