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

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('closeBtn');

  cards.forEach(card => {
      card.addEventListener('click', () => {
          // Populate modal with card content
          const title = card.querySelector('.card-title').textContent;
          const description = card.querySelector('.card-description').textContent;
          const imgSrc = card.querySelector('.card-img').src;

          modalBody.innerHTML = `
              <img src="${imgSrc}" alt="Expanded Image" style="width: 100%; border-radius: 10px;">
              <h3>${title}</h3>
              <p>${description}</p>
          `;

          // Show modal
          modal.style.display = 'flex';
          modalContent.classList.add('show');
      });
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', () => {
      modalContent.classList.remove('show');
      setTimeout(() => {
          modal.style.display = 'none';
      }, 300); // Match the transition time
  });

  // Close modal when clicking outside of modal content
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modalContent.classList.remove('show');
          setTimeout(() => {
              modal.style.display = 'none';
          }, 300); // Match the transition time
      }
  });
});
