const loadImg = document.getElementById("load-img");
const loadSecImg = document.getElementById("load-sec-img");

loadImg.addEventListener("click", async () => {
  try {
    const URL = "https://api.pexels.com/v1/search?query=nature";
    const row = document.getElementById("row");

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization:
          "[JbgkYX5pWpyVTmmIM45c7Vl2UfASxeXGTMuPXF1I5simeUIo5ZA0yAI2]",
      },
    });
    const parseBody = await response.json();
    console.log(parseBody);
    //   console.log(parseBody.photos);
    row.innerText = ``;

    parseBody.photos.forEach((elem) => {
      const photographer = elem.photographer;
      const img = elem.src.portrait;
      const id = elem.id;
      const url = elem.url;
      //   console.log(photographer);
      //   console.log(img);
      const col_md_4 = document.createElement("div");
      col_md_4.className = "col-md-4";
      const card = document.createElement("div");
      card.className = "card mb-4 shadow-sm";
      const card_body = document.createElement("div");
      card_body.className = "card-body";

      card.innerHTML = `<img src="${img}" style="height: 225px; object-fit: cover; object-position: bottom;">`;
      card_body.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${photographer}</h5>
            <p class="card-text">
                This is an image made by ${photographer}, published on <a href="https://www.pexels.com/">Pexel</a> website. 
                If you want to find out more click <a href="${url}" target="_blank">here</a>
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                    </button>
                    <button id="hide" type="button" class="btn btn-sm btn-outline-secondary" onclick="hideFunc(event)">
                        Hide
                    </button>
                </div>
            <small class="text-muted">${id}</small>
            </div>
        </div>
    `;

      card.appendChild(card_body);
      col_md_4.appendChild(card);
      row.appendChild(col_md_4);
    });

    const hide = document.getElementById("hide");
  } catch (error) {
    console.log(error.message);
  }
});

const hideFunc = (event) => {
  event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
};

// loadSecImg.addEventListener("click", async () => {
//   try {
//     const URL = "https://api.pexels.com/v1/search?query=people";
//     const row = document.getElementById("row");

//     const response = await fetch(URL, {
//       method: "GET",
//       headers: {
//         Authorization:
//           "[JbgkYX5pWpyVTmmIM45c7Vl2UfASxeXGTMuPXF1I5simeUIo5ZA0yAI2]",
//       },
//     });
//     const parseBody = await response.json();
//     console.log(parseBody);
//     //   console.log(parseBody.photos);
//     row.innerText = ``;

//     parseBody.photos.forEach((elem) => {
//       const photographer = elem.photographer;
//       const img = elem.src.portrait;
//       //   console.log(photographer);
//       //   console.log(img);
//       const col_md_4 = document.createElement("div");
//       col_md_4.className = "col-md-4";
//       const card = document.createElement("div");
//       card.className = "card mb-4 shadow-sm";
//       const card_body = document.createElement("div");
//       card_body.className = "card-body";

//       card.innerHTML = `<img src="${img}" style="height: 225px; object-fit: cover; object-position: bottom;">`;
//       card_body.innerHTML = `
//             <div class="card-body">
//                 <h5 class="card-title">${photographer}</h5>
//                 <p class="card-text">
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit longer.
//                 </p>
//                 <div class="d-flex justify-content-between align-items-center">
//                     <div class="btn-group">
//                         <button type="button" class="btn btn-sm btn-outline-secondary">
//                             View
//                         </button>
//                         <button type="button" class="btn btn-sm btn-outline-secondary">
//                             Edit
//                         </button>
//                     </div>
//                 <small class="text-muted">9 mins</small>
//                 </div>
//             </div>
//         `;

//       card.appendChild(card_body);
//       col_md_4.appendChild(card);
//       row.appendChild(col_md_4);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });
