function imageUrl(image) {
  return `./assets/img/${image}`;
}
function rupiah(bilangan) {
  var number_string = bilangan.toString(),
    sisa = number_string.length % 3,
    rupiah = number_string.substr(0, sisa),
    ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
    return rupiah;
  }
}

const products = [
  {
    id: 0,
    nameProduct: `SANDSBERG`,
    stock: 3,
    shortDesc: `Meja, 67x67 cm`,
    longDesc: `Bahan Kaki: Baja, Dilapisi serbuk epoksi/poliester
    Bahan Daun Meja: Particleboard, Foil melamin, Tepi plastik, Tepi plastik`,
    category: `Meja`,
    colorAvailable: [`white`, `black`, `blue`],
    rating: 2,
    price: 499_999,
    IDR: rupiah(499999),
    promo: 400_000,
    image: imageUrl(`MEJA_SANDSBERG.jpg`), // -> `./assets/img/MEJA_SANDSBERG.jpg`
  },
  {
    id: 1,
    nameProduct: `MELLTORP`,
    stock: 2,
    shortDesc: `Meja, 75x75 cm`,
    longDesc: `Bahan Kaki: Baja, Dilapisi serbuk epoksi/poliester
    Bahan Daun Meja: Particleboard, Foil melamin, Tepi plastik, Tepi plastik`,
    category: `Meja`,
    colorAvailable: [`white`, `black`],
    rating: 1,
    price: 599_000,
    promo: 500_000,
    image: imageUrl(`MEJA_MELLTORP.jpg`),
  },
  {
    id: 2,
    nameProduct: `VIMLE`,
    stock: 5,
    shortDesc: `Sofa, 98X48 cm`,
    longDesc: `bahan: Bahan
    Rangka sandaran lengan
    Kaki                    : Plastik polipropilena
    Rangka sandaran tangan  : Particleboard, Kayu lapis, Fibreboard, Kayu veneer dilaminasi, Busa poliuretana 25 kg/m3, Busa poliuretana 20 kg/m3, Isi poliester
    Kain pelapis            : 100% polipropilena

    Sarung untuk sandaran lengan
    80% katun, 20% poliester (min. 90% recycled)
    Sarung untuk bagian 3 dudukan
    Kain                    : 80% katun, 20% poliester (min. 90% recycled)
    Kain belakang           : 100 % poliester
    
    Bagian rangka 3 dudukan
    Rel silang              : Baja, Dilapisi serbuk epoksi/poliester
    Klip                    : Plastik polipropilena
    Kain belakang           : 100 % poliester
    Rangka                  : Kayu lapis, Busa poliuretana 20 kg/m3, Isi poliester, Particleboard, Fibreboard, Kayu solid, Kayu veneer dilaminasi
    Bantalan belakang       : 30% potongan busa poliuretana/ 70% serat poliester
    Bantalan tempat duduk   : Busa poliuretana elastis tinggi (busa dingin) 35 kg/m3, Isi poliester `,
    category: `Bangku`,
    colorAvailable: [`white`, `black`, `red`, `purple`, `blue`],
    rating: 4,
    price: 8_995_000,
    promo: 200_000,
    image: imageUrl(`SOFA_VIMLE.jpg`),
  },
  {
    id: 3,
    nameProduct: `LOMMARP`,
    stock: 10,
    shortDesc: `Meja, 90x54 cm`,
    longDesc: `Bahan dasar: Fibreboard, Cat poliester
    Daun meja: Fibreboard, Cat poliester, Cat poliester, Cat poliester
    Belakang laci/ Sisi tepi laci: Kayu pinus solid
    Dasar laci: Fibreboard, Cat poliester, Cat poliester`,
    category: `Meja`,
    colorAvailable: [`white`, `black`],
    rating: 3,
    price: 2_799_000,
    promo: 2_499_000,
    image: imageUrl(`MEJA_LOMMARP.jpg`),
  },
  {
    id: 4,
    nameProduct: `HAUGA`,
    stock: 1,
    shortDesc: `Meja, 100x45 cm`,
    longDesc: `Bahan :
    Rangka bawah: Baja, Baja, Dilapisi serbuk epoksi/poliester
    Permukaan meja/ Panel bawah/ Partisi/ Panel belakang: Particleboard, Kertas foil
    Panel samping/ Panel depan: Particleboard, Kertas foil, Tepi plastik`,
    category: `Meja`,
    colorAvailable: [`white`, `black`],
    rating: 2,
    price: 2_799_000,
    promo: 2_499_000,
    image: imageUrl(`MEJA_HAUGA.jpg`),
  },
  {
    id: 5,
    nameProduct: `SONGESAND`,
    stock: 3,
    shortDesc: `Rangka kasur, 160x200 cm`,
    longDesc: `
    Kaki: Fibreboard, Kertas foil, Plastik ABS
    Tepi ranjang: Particleboard, Kertas foil, Tepi plastik
    Rel atas: Fibreboard, Kertas foil, Tepi plastik
    Pita: 100 % poliester
    Papan dasar ranjang: Kayu veneer yang dilem berlapis, Veneer kayu birch, Getah adhesive sebagai lapisan`,
    category: `Tidur`,
    colorAvailable: [`white`, `black`],
    rating: 1,
    price: 2_799_000,
    promo: 2_499_000,
    image: imageUrl(`KASUR_SONGESAND.jpg`),
  },
  {
    id: 6,
    nameProduct: `LAUTERS`,
    stock: 3,
    shortDesc: `Lampu elegant 18W`,
    longDesc: `Materials
    Tube Leg  : Solid ash, Clear acrylic lacquer
    Shade     : Polystyrene plastic, 100% polyester, PET plastic`,
    category: `Lampu`,
    colorAvailable: [`white`, `black`],
    rating: 2,
    price: 899_000,
    promo: 600_000,
    image: imageUrl(`LAMPU_LAUTERS.jpg`),
  },
  {
    id: 7,
    nameProduct: `HEMLINGBY`,
    stock: 3,
    shortDesc: `Sofa 2 dudukan, Minimalist`,
    longDesc: `Bahan:
    Rangka: Particleboard, Fibreboard, Kayu lapis, Kayu veneer dilaminasi, 100% kertas karton daur ulang
    Tempat duduk: Busa poliuretana 25 kg/meter kubik, Busa poliuretana 20 kg/meter kubik, Isi poliester
    Belakang: Busa poliuretana 20 kg/meter kubik, Isi poliester, Polipropilena tidak ditenun
    Sandaran tangan: Busa poliuretana 20 kg/meter kubik, Isi poliester, Isi poliester
    Kain pelindung: Polipropilena tidak ditenun
    Bracket: Baja, Powder coating
    Kaki: Plastik polipropilena
    Pegas zig-zag: Baja
    Kain: 100% poliester (min. 90% recycled)`,
    category: `Bangku`,
    colorAvailable: [`white`, `red`, `yellow`, `green`],
    rating: 3,
    price: 3_495_000,
    promo: 2_599_000,
    image: imageUrl(`SOFA_HEMLINGBY.jpg`),
  },
  {
    id: 8,
    nameProduct: `LINANÄS`,
    stock: 3,
    shortDesc: `Sofa duduk, vissle krem`,
    longDesc: `Bahan
    Rangka tempat duduk       : Kayu lapis, Fibreboard, Fibreboard, Polipropilena tidak ditenun, Isi poliester, Alas fern, Kayu veneer dilaminasi, Busa poliuretana 25 kg/m3
    Rangka belakang           : Baja, Alas fern, Dilapisi serbuk epoksi/poliester
    Sandaran tangan           : Kayu lapis, Fibreboard, Busa poliuretana 20 kg/m3, Isi poliester, 100% kertas karton daur ulang, Fibreboard
    Bantalan beladocument     : Polipropilena tidak ditenun, Busa poliuretana 25 kg/m3, Isi poliester
    Kaki: Plastik ABS
    Kain: 100 % poliester`,
    category: `Bangku`,
    colorAvailable: [`black`, `red`, `blue`, `green`],
    rating: 3,
    price: 1_895_000,
    promo: 1_695_000,
    image: imageUrl(`SOFA_LINANAS.jpg`),
  },
  {
    id: 9,
    nameProduct: `EKTORP`,
    stock: 3,
    shortDesc: `Sofa 3 dudukan`,
    longDesc: `Bahan:    
    Kain belakang: 100 % poliester (100% daur ulang)
    Kain: 100% poliester (min. 90% recycled)
    Rangka sandaran dan tempat duduk: Kayu lapis, Busa poliuretana 20 kg/meter kubik, Kayu veneer dilaminasi, Fibreboard, Particleboard
    Sandaran tangan: Busa poliuretana 20 kg/meter kubik, Busa poliuretana 25 kg/meter kubik, Isi poliester, Kayu veneer dilaminasi, Fibreboard, Particleboard
    Bantalan tempat duduk: Isi poliester, Polipropilena tidak ditenun, Busa poliuretana elastis tinggi (busa dingin) 35 kg/meter kubik, 30% potongan busa poliuretana/ 70% serat poliester, Serat poliester berongga
    Bantalan belakang: Serat poliester berongga, Polipropilena tidak ditenun
    Pelengkap: Plastik polipropilena`,
    category: `Bangku`,
    colorAvailable: [`black`, `red`, `blue`, `green`, `white`],
    rating: 3,
    price: 5_195_000,
    promo: 4_999_999,
    image: imageUrl(`BANGKU_EKTORP.jpg`),
  },
  {
    id: 10,
    nameProduct: `SLATTUM`,
    stock: 5,
    shortDesc: `Rangka kasur, 180x200 cm`,
    longDesc: `Bahan:
    Kepala tempat tidur: Baja, Alas fern, Busa poliuretana 20 kg/m3, Isi poliester
    Papan kaki ranjang: Baja
    Tepi ranjang: Baja, Particleboard, Isi poliester
    Kain pelapis: 100% polipropilena
    Kaki/ Balok tengah: Baja, Dilapisi serbuk epoksi/poliester
    Kain: 100 % poliester
    Papan dasar ranjang: Kayu veneer yang dilem berlapis, Veneer kayu birch, Getah adhesive sebagai lapisan`,
    category: `Tidur`,
    colorAvailable: [`black`, `grey`, `white`, `red`],
    rating: 3,
    price: 2_999_999,
    promo: 2_799_000,
    image: imageUrl(`KASUR_SLATTUM1.jpg`),
  },
  {
    id: 11,
    nameProduct: `CLOSET`,
    stock: 5,
    shortDesc: `kebutuhan dasar, 46.5 x 35 x 43 cm`,
    longDesc: `Kloset duduk siram, siramnya pakai gayung, sudah termasuk tutup dan baut`,
    category: `Closet`,
    colorAvailable: [`black`, `grey`, `white`, `red`],
    rating: 3,
    price: `FREE`,
    promo: 2_799_000,
    image: imageUrl(`KOILEK.jpg`),
  },
  {
    id: 12,
    nameProduct: `HEMMA`,
    stock: 100,
    shortDesc: `Lampu kamar,  25 x 25 cm`,
    longDesc: `Setiap kap lampu unik karena dibuat dengan tangan oleh pengarajin.
    Anda dapat menciptakan suasana nyaman di rumah dengan menggunakan kertas lampu yang menyebarkan cahaya dekoratif.`,
    category: `Lampu`,
    colorAvailable: [`black`, `grey`, `white`, `red`],
    rating: 3,
    price: (129.9).toFixed(3),
    promo: 2_799_000,
    image: imageUrl(`LAMPU_HEMMA.jpg`),
  },
  {
    id: 13,
    nameProduct: `EVEDAL`,
    stock: 25,
    shortDesc: `Lampu lantai, marmer/abu-abu,	13 W,  145 x 34 x 41 cm`,
    longDesc: `Bahan asli seperti kaca dan kuningan, bersama dengan desain 
    Skandinavia yang tak lekang oleh waktu. Kami harap Anda menyimpan rangkaian lampu ini seumur hidup Anda, dan mungkin mewariskannya ke generasi berikutnya.`,
    category: `Lampu`,
    colorAvailable: [`black`, `grey`, `white`, `red`],
    rating: 3,
    price: 4_499_000,
    promo: 3_999_000,
    image: imageUrl(`LAMPU_EVEDAL.jpg`),
  },
  {
    id: 13,
    nameProduct: `LÖKNÄS`,
    stock: 25,
    shortDesc: `Floor lamp, arched, blue silver-colour/black`,
    longDesc: `Light bulb sold separately. Ikiwae recommends LED bulb E27.
    The lamp base should not be used with a glass lampshade since it is too heavy and can cause the lamp base to tip.
    If you fold out the tabs, it is not possible to fold them back in again.
    Special waste handling may be required. Please contact your local authorities for more information.`,
    category: `Lampu`,
    colorAvailable: [`black`, `grey`, `white`, `red`],
    rating: 3,
    price: 1_998_000,
    promo: 500_000,
    image: imageUrl(`LAMPU_LÖKNÄS.jpg`),
  },
];

/* DOM  */

/* MEMISAHKAN PRODUK MENJADI PER CATEGORY */
function categorizedProduct(data) {
  const categoryResult = {};

  for (const product of products) {
    const { category } = product;
    if (!categoryResult[category]) categoryResult[category] = [];
    categoryResult[category].push(product);
  }

  return categoryResult;
}

/* MERENDER ITEM PERCATEGORY */
function renderProduct(data) {
  const separatedProducts = categorizedProduct(data);
  const productContainer = document.getElementById("products");
  // const productContainer = document.getElementsByClassName("container");
  let itemContainer;

  for (const product in separatedProducts) {
    productContainer.innerHTML += `<div class="row">
    <div class="row">
      <div class="col">
        <h4 class="text-start title-section prod-section">${product}</h4>
      </div>
    </div>

    <div class="row" id="${product}">
     ${separatedProducts[product]
       .map(
         ({ id, image, nameProduct, shortDesc, IDR }) =>
           `<div class ="col-3 d-flex justify-content-between">
           <div class="card product">
             <div class="row image-prod item-header" value=${id}>
            <img src="${image}" class="card-img-top" alt="${nameProduct}">
          </div>
      
         <div class="card-body">
            <h5 class="card-title">${nameProduct}</h5>
            <p class="card-text short-desc">${shortDesc}</p>
    
            <div class="footer-card d-flex justify-content-between">
                <a href="#" class="btn btn-primary btn-checkout align-self-center px-3"> <i class="fa-solid fa-cart-shopping"></i> Checkout</a>
                 <p class="harga">Rp. ${IDR}</p>
             </div>
        </div>
      </div>
     </div>`
       )
       .join("")}
    </div>
   </div>`;
  }
}

renderProduct(products);

/* DETAIL PAGE (SINGLE PAGE APPLICATION) */
const renderRating = (rating) => {
  let resultText = "";
  let notRated = 5 - rating;

  while (rating > 0) {
    resultText += `<span class="fa fa-star checked"></span>`;
    rating--;
  }
  while (notRated > 0) {
    resultText += `<span class="fa fa-star"></span>`;
    notRated--;
  }

  return resultText;
};

const mainContainer = document.querySelector(".prod-section");
let selectedPageId = 0;
document.addEventListener("DOMContentLoaded", () => {
  const itemHeader = document.querySelectorAll(".item-header");
  itemHeader.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log(item.getAttribute("value"))

      selectedPageId = item.getAttribute("value");

      for (const product of products) {
        const {
          id,
          nameProduct,
          rating,
          longDesc,
          price,
          promo,
          colorAvailable,
          stock,
          color,
          image,
        } = product;

        mainContainer.innerHTML = `<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src="${image}" /></div>
						</div>
						
						
					</div>
					<div class="details col-md-6 p-4">
						<h3 class="product-title">${nameProduct}</h3>
						<div class="rating">
							<div class="stars">
								${renderRating(rating)}
							</div>
							<span class="review-no">${Math.floor(Math.random() * 100)} reviews</span>
						</div>
						<p class="product-description">${longDesc}</p>
						<h4 class="price"><strike>IDR ${price.toLocaleString(
              "id-ID"
            )}</strike> <span>IDR ${promo.toLocaleString("id-ID")}</span></h4>
						<p class="vote"> Stock: <strong>${stock} item</strong></p>
						<h5 class="colors">colors: ${colorAvailable
              .map(
                (color) =>
                  `<span class="color" style='background-color:${color}; ${
                    color === "white" ? "border: 1px solid gold" : ""
                  }'></span>`
              )
              .join("")}

						</h5>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>`;
      }
    });
  });
});

/* dibawah ini jangan diapus dulu ya */
// const {
//   nameProduct,
//   stock,
//   shortDesc,
//   longDesc,
//   category,
//   colorAvailable,
//   rating,
//   price,
//   promo,
// } = product;

// const image = product?.image;

// testSection.innerHTML += `

/* <div class ="col-3 mt-4 mb-3 d-flex justify-content-between">
  <div class="card product">
    <div class="row image-prod">
      <img src="${image}" class="card-img-top" alt="${nameProduct}">
    </div>

    <div class="card-body">
        <h5 class="card-title">${nameProduct}</h5>
        <p class="card-text short-desc">${shortDesc}</p>

        <div class="footer-card d-flex justify-content-between">
            <a href="#" class="btn btn-primary btn-checkout align-self-center px-4">Checkout</a>
            <p class="harga">Rp. ${price}</p>
        </div>
    </div>
  </div>
</div> */

// `;
