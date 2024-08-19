document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
      });
    });
  });
  
// script.js
document.getElementById('open-modal-button').addEventListener('click', function() {
  document.getElementById('resume-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('resume-modal').style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('resume-modal')) {
      document.getElementById('resume-modal').style.display = 'none';
  }
});
