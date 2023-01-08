



function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}



const nightModeButton = document.getElementById('night-mode-button');
nightModeButton.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
});
