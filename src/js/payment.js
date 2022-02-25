const checkoutItem = JSON.parse(localStorage.getItem("boughtItem"));
const totalPayment = Number(localStorage.getItem("totalPrice"));

document.addEventListener("DOMContentLoaded", () => {
  checkoutItem.forEach((element) => {
    document.querySelector(
      "#invoice-item"
    ).innerHTML = `<div class="col-2 img-inv-prod pt-3 d-flex justify-content-center">
          <img src="${element.image}" alt="" />
          </div>
          <div class="col-4 nameprod-co-prod d-flex justify-content-center">
          <h2 class="bd-highlight">${element.nameProduct}</h2>
          </div>
          <div class="col-4 harga-co-prod d-flex justify-content-center">
          <h2>Rp. ${element.promo.toLocaleString("id-ID")}</h2>
          </div>
          <div class="col-1 counter-co-prod">
          <div
            class="form-control form-control-sm border-0 px-3 d-flex justify-content-center"
            id="total-container"
          >
            <span style="font-size: 20px">${checkoutItem.length}</span>
          </div>
          </div>
          <div class="col-1 delete-co-prod d-flex justify-content-center">
          </div>`;
  });

  document
    .querySelectorAll(".total-payment")
    .forEach(
      (element) =>
        (element.innerHTML = `<h2>Rp. ${totalPayment.toLocaleString(
          "id-ID"
        )}</h2>`)
    );
});
