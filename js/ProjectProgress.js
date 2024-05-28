const ProjectProgress = document.querySelector(".proj-progress-card");

function loadJSON() {
  fetch("jsons/Project_Progress_Summary.json")
  .then(response => response.json())
  .then(data => {
      let html = `<div class="col-xl-12">
          <div class="card proj-progress-card">
              <div class="card-body">
                  <div class="row">`;  // Start of container for all projects

      data.project_progress_summary.forEach(product => {
          html += `
              <div class="col-xl-3 col-md-6">
                  <h6>${product.title}</h6>
                  <h5 class="m-b-30 f-w-700">${product.value}<span class="text-c-green m-l-10">${product.percentage}</span></h5>
                  <div class="progress">
                      <div class="progress-bar bg-c-red" style="width:25%; ${product.percentage};"></div>
                  </div>
              </div>
          `;  // Each project is a column within the row
      });

      html += `</div>
              </div>
          </div>
      </div>`;  // Close the row, card-body, card, and col-xl-12

      ProjectProgress.innerHTML = html;
  })
  .catch((error) => {
      console.error("Error loading JSON:", error);
  });
}

document.addEventListener("DOMContentLoaded", loadJSON);  // Ensures the DOM is fully loaded before executing the script
