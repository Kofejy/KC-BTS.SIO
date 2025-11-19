const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    const tabId = link.getAttribute('data-tab');

    // Masquer toutes les sections
    tabContents.forEach(section => section.classList.remove('active'));

    // Afficher la section sélectionnée
    document.getElementById(tabId).classList.add('active');
  });
});
