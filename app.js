let data = [
  {
    title: "cars",
    product: [
      {
        name: "AMG cls 63",
        imgUrl:
          "https://www.goodwood.com/globalassets/.road--racing/road/news/2019/june/mercedes-amg-cla35-4matic-shooting-brake/mercedes-amg-cla35-shootingbrake04061901.jpg?crop=(0,255,2600,1718)&width=1600",
        price: 65000,
        color: "yellow",
        amount: 428,
      },
      {
        name: "BMW X7",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPvJ2lw47nY-q82fKRWGr2xg-lHduO-seG_T-ULmJ1Q&s",
        price: 81000,
        color: "blue",
        amount: 361,
      },
      {
        name: "Chevrolet Corvette C8",
        imgUrl:
          "https://www.chevroletunicars.com.mx/content/dam/chevrolet/na/mx/es/index/performance/2023-corvette-stingray/colorizer/jellys/artic-white.jpg?imwidth=960",
        price: 200000,
        color: "white",
        amount: 3,
      },
      {
        name: "Tahoe",
        imgUrl: "https://lionmotors.uz/wp-content/uploads/2020/12/tahoe.png",
        price: 110000,
        color: "blace",
        amount: 367,
      },
    ],
  },

  {
    title: "Smartfonlar",
    product: [
      {
        name: "AKM",
        imgUrl:
          "https://www.krale.shop/media/catalog/product/t/o/tokyo-marui-kalashnikov-akm-_1_.jpg",
        price: 120,
        color: "brown",
        amount: 1275,
      },
      {
        name: "Groza",
        imgUrl:
          "https://image.made-in-china.com/202f0j00HtKoIUanauVs/Groza-High-Quality-Electric-Automatic-Water-Ball-Gun-Shooting-Beads-Splatter-Automatic-Toy-Gun-Pistola-De-Hidrogel.webp",
        price: 0,
        color: "silver",
        amount: 300,
      },
      {
        name: "M 24",
        imgUrl:
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9474cb2a-028b-4646-a5b8-f64b057470bd.__CR0,0,2362,2362_PT0_SX300_V1___.png",
        price: 0,
        color: "silver",
        amount: 139,
      },
      {
        name: "UMP",
        imgUrl:
          "https://www.defconairsoft.co.uk/wp-content/uploads/2015/06/Umarex-H-amp-K-UMP-Sportline.jpg",
        price: 0,
        color: "silver",
        amount: 165,
      },
    ],
  },
];

let product1List = document.querySelector("#product1List");

let title1 = document.querySelector(".title1");
title1.textContent = "Cars";

data[0].product.forEach(({ name, imgUrl, price, color, amount }) => {
  product1List.innerHTML += `
      <li class="list1-item">
          <a href=${imgUrl} style='text-decoration: none; color: #000;' target=_blank>
              <img src="${imgUrl}" alt="" width='300' height='300' >
              <h3 style='color: #fff'>${name}</h3>
              <p style='color: #fff'>Narxi: ${price}</p>
              <span  style='background: ${color};' class="color"></span>
              <p style='color: #fff'>Qolgan: ${amount}</p>
          </a>
      </li>`;
});

let title2 = document.querySelector(".title2");
title2.textContent = "Oружие";

let product2List = document.querySelector("#product2List");

data[1].product.forEach(({ name, imgUrl, price, color, amount }) => {
  let li2 = document.createElement("li");

  li2.classList.add("list2-item");

  li2.innerHTML = `
          <a href=${imgUrl} style='text-decoration: none; color: #000;' target=_blank>
              <img src="${imgUrl}" alt="" width='300' height='300' >
              <h3 style='color: #fff'>${name}</h3>
              <p style='color: #fff'>Narxi: ${price}</p>
              <span  style='background: ${color};' class="color"></span>
              <p style='color: #fff'>Qolgan: ${amount}</p>
          </a>`;
  product2List.append(li2);
});
