
// toggle header menu
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', function () {
  console.log('clicked');
  menu.classList.toggle('show');
});

// table content
const table = document.querySelector('#candidate-table');

const tableBody = table.querySelector('tbody');



const renderTable = function() {
  candidates.forEach(function(candidate) {
    const html = `
      <tr>
        <td>${candidate.candidateName}</td>
        <td>${candidate.rating}  <i class="fas fa-star"></i> </td>
        <td>${candidate.stages}</td>
        <td>${candidate.appliedRole}</td>
        <td>${candidate.applicationDate}</td>
        <td>${candidate.attachments}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', html);
    
  });
}

renderTable(); 

const searchInput = document.getElementById('searchField');
console.log(searchInput);

searchInput.addEventListener('change', 

function (event) {
 
  const searchTerm = event.target.value.toLowerCase();
  const regex = new RegExp(searchTerm, 'i'); // Create a case-insensitive regular expression

  // Clear the table body
  tableBody.innerHTML
  =null
console.dir(tableBody)
  candidates.forEach(function (candidate) {
    const candidateName = candidate.candidateName.toLowerCase();
    const appliedRole = candidate.appliedRole.toLowerCase();
    const location = candidate.location.toLowerCase();

    if (
      candidateName.match(regex) ||
      appliedRole.match(regex) ||
      location.match(regex)

    ) {
      const html = `
        <tr>
          <td>${candidate.candidateName}</td>
          <td>${candidate.rating}  <i class="fas fa-star"></i> </td>
          <td>${candidate.stages}</td>
          <td>${candidate.appliedRole}</td>
          <td>${candidate.applicationDate}</td>
          <td>${candidate.attachments}</td>
        </tr>
      `;
      tableBody.insertAdjacentHTML('beforeend', html);
    }
  });
});
