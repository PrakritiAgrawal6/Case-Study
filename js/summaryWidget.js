const summaryList = document.querySelector('.summary-list');

function loadJSON() {
    fetch('jsons/summary.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        const colors = ['text-c-blue', 'text-c-green', 'text-c-yellow'];
        const facolors = ['bg-c-blue', 'bg-c-green', 'bg-c-yellow'];
        data.summary.forEach((product,index) => {
            const colorClass = colors[index % colors.length];
            const facolorClass = facolors[index % facolors.length];
            html += `
            <div class="summary-list">
                <div class="card comp-card" id="impressions-widget">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="m-b-25">${product.title}</h6>
                                <h3 class="${colorClass}">${product.value}</h3>
                                <p class="m-b-0 date-range">${product.duration} (${product.year})</p>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-eye ${facolorClass}"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        summaryList.innerHTML = html; // Make sure this element exists or change to summaryList
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
}

document.addEventListener('DOMContentLoaded', loadJSON);  // Ensures the DOM is fully loaded before executing the script
