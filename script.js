const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');


if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

toggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); 
});




function saveSubjects() {
    const checkboxes = document.querySelectorAll('.subject-check');
    let selectedSubjects = [];
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedSubjects.push(checkbox.value);
        }
    });
    
    // Store the array as a JSON string
    localStorage.setItem('mySelectedCourses', JSON.stringify(selectedSubjects));
    
    alert('Courses registered successfully!');
    window.location.href = 'dashboard.html'; 
}


function loadDashboard() {
    const courseListContainer = document.getElementById('courseList');
    
  
    if (!courseListContainer) return;

    const savedCourses = JSON.parse(localStorage.getItem('mySelectedCourses'));

    if (savedCourses && savedCourses.length > 0) {
        courseListContainer.innerHTML = ''; // Clear empty message
        
        savedCourses.forEach((course) => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = course;
            row.appendChild(cell);
            courseListContainer.appendChild(row);
        });
    } else {
        courseListContainer.innerHTML = '<tr><td>No courses registered yet.</td></tr>';
    }
}

window.addEventListener('DOMContentLoaded', loadDashboard);