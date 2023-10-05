document.addEventListener('DOMContentLoaded', function() {
    // Adding event listener for Show/Hide button
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');
    toggleButton.addEventListener('click', function() {
      if (toggleContent.classList.contains('hidden')) {
        toggleContent.classList.remove('hidden');
        toggleContent.classList.add('show');
      } else {
        toggleContent.classList.add('hidden');
        toggleContent.classList.remove('show');
      }
    });
  
    // Form validation
    const form = document.getElementById('myForm');
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    form.addEventListener('submit', function(event) {
      if (password.value.length < 8) {
        event.preventDefault();
        passwordError.classList.remove('hidden');
      } else {
        passwordError.classList.add('hidden');
        // Do your AJAX form submission here
      }
    });
  
    // Load content dynamically using AJAX
    const loadContentBtn = document.getElementById('loadContent');
    const dynamicContent = document.getElementById('dynamicContent');
    loadContentBtn.addEventListener('click', function() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          dynamicContent.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        }
      };
      xhr.send();
    });

    // Konami Code for hidden feature
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  let konamiIndex = 0;
  const konamiDiv = document.getElementById('konami');
  
  document.addEventListener('keydown', function(event) {
    if (event.code === konamiCode[konamiIndex]) {
      konamiIndex++;
    } else {
      konamiIndex = 0;
    }

    if (konamiIndex === konamiCode.length) {
      konamiDiv.classList.remove('hidden');
      konamiDiv.classList.add('show');
      konamiIndex = 0; // Reset the index
    }
  });
});
  