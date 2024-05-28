const NewProducts = document.querySelector(".table-responsive");

function loadJSON() {
  fetch("jsons/New_Products.json")
  .then(response => response.json())
  .then(data => {
      let html = `<div class="card-block p-b-0">
      <div class="table-responsive">
          <table class="table table-hover m-b-0">
          <thead>
          <tr>
              <th>Name</th>
              <th>Product Code</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Rating</th>`; 

      data.new_products.forEach(product => {
        const labelColor = product.status === "In Stock" ? "#2ed8b6" : "#ff5370";
        const stars = generateStars(product.rating);
          html += `
                  <tbody>
                      <tr>
                          <td>${product.name}</td>
                          <td>${product.product_code}</td>
                          <td>${product.customer}</td>
                          <td><label class="label" style="color: white; background-color: ${labelColor};">${product.status}</label></td>
                          <td>
                              ${stars}
                          </td>
                      </tr>
                </tbody>
          `; 
      });

      html += `</div>
              </div>
          </div>
          </tr>
          </thead>`;

      NewProducts.innerHTML = html;
  })
  .catch((error) => {
      console.error("Error loading JSON:", error);
  });
}
// Function to generate filled and unfilled stars based on rating
function generateStars(rating) {
    console.log(rating);
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += i <= rating 
                   ? `<a href="#!"><i class="fa fa-star f-12 text-c-yellow"></i></a>` // Filled star
                   : `<a href="#!"><i class="fa fa-star f-12 text-default"></i></a>`; // Unfilled star
    }
    return starsHtml;
  }

document.addEventListener("DOMContentLoaded", loadJSON);  
