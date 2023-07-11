
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


const candidates = [
  {
    _id: 1,
    candidateName: "John Doe",
    rating: 4.5,
    stages: ["Phone interview"],
    appliedRole: "Software Engineer",
    applicationDate: "2023-07-01",
    attachments: ["resume.pdf", "cover_letter.pdf"],
    location: 'New York',
  },
  {
    _id: 2,
    candidateName: "Jane Smith",
    rating: 3.8,
    stages: ["In-person interview"],
    appliedRole: "Data Analyst",
    applicationDate: "2023-06-25",
    attachments: ["resume.pdf"],
    location: 'San Francisco',
  },
  {
    _id: 3,
    candidateName: "Alex Johnson",
    rating: 4.2,
    stages: ["Technical assessment",],
    appliedRole: "Project Manager",
    applicationDate: "2023-07-05",
    attachments: ["resume.pdf", "cover_letter.pdf", "references.pdf"],
    location: 'Los Angeles',
  },
  {
    _id: 4,
    candidateName: "Sarah Lee",
    rating: 4.0,
    stages: ["Phone interview"],
    appliedRole: "Marketing Specialist",
    applicationDate: "2023-06-29",
    attachments: ["resume.pdf", "portfolio.pdf"],
    location: 'Chicago',
  },
  {
    _id: 5,
    candidateName: "Michael Chen",
    rating: 3.5,
    stages: ["Technical assessment"],
    appliedRole: "Data Scientist",
    applicationDate: "2023-07-02",
    attachments: ["resume.pdf", "transcripts.pdf"],
    location: 'Seattle',
  },
  {
    _id: 6,
    candidateName: "Emily Davis",
    rating: 4.8,
    stages: ["Presentation"],
    appliedRole: "Sales Manager",
    applicationDate: "2023-06-28",
    attachments: ["resume.pdf", "cover_letter.pdf"],
    location: 'Boston',
  },
  {
    _id: 7,
    candidateName: "David Wilson",
    rating: 3.2,
    stages: ["Phone interview"],
    appliedRole: "Customer Support Representative",
    applicationDate: "2023-07-03",
    attachments: ["resume.pdf"],
    location: 'Austin',

  },
  {
    _id: 8,
    candidateName: "Olivia Thompson",
    rating: 4.1,
    stages: ["Skill test"],
    appliedRole: "Graphic Designer",
    applicationDate: "2023-07-06",
    attachments: ["resume.pdf", "portfolio.pdf"],
    location: 'San Diego',
  }
];

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
