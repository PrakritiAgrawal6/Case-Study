const WhatsNew = document.querySelector(".latest-update-card");

function loadJSON() {
  fetch("jsons/Whats_New.json")
    .then(response => response.json())
    .then(data => {
        let html = `<div class="col-xl-12 col-md-12">
        <div class = "card latest-update-card">
            <div class = "card-header">
                <h5>What’s New</h5>
                <div class = "card-header-right">
                    <ul class = "list-unstyled card-option">
                        <li class = "first-opt"><i class = "feather icon-chevron-left open-card-option"></i></li>
                        <li><i class = "feather icon-maximize full-card"></i></li>
                        <li><i class = "feather icon-minus minimize-card"></i></li>
                        <li><i class = "feather icon-refresh-cw reload-card"></i></li>
                        <li><i class = "feather icon-trash close-card"></i></li>
                        <li><i class = "feather icon-chevron-left open-card-option"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 290px;">
                    <div class="scroll-widget" style="overflow: hidden; width: auto; height: 290px;">`;

        data.what_new_items.forEach((product,index) => {
            html += `
                        <div class="latest-update-box">
                            <div class="row p-t-20 p-b-30">
                                <div class="col-auto text-right update-meta p-r-0">
                                    <img src="./template_files/avatar-${index}.jpg" alt="user image" class="img-radius img-40 align-top m-r-15 update-icon" />
                                </div>
                                <div class="col p-l-5">
                                    <a href="#!"><h6>${product.message}</h6></a>
                                    <p class="text-muted m-b-0">${product.created_by}</p>
                                </div>
                            </div>
                        </div>`;
        });

        html += `          </div>
                    </div>
                </div>
            </div>
        </div>`;

        WhatsNew.innerHTML = html;
    })
    .catch((error) => {
        console.error("Error loading JSON:", error);
    });
}

document.addEventListener("DOMContentLoaded", loadJSON);
