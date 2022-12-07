const products = {
    data: [
      {
        productName: "RoyalY",
        category: "Royal",
        price: 1200,
        image: "Nike.jpg",
      },
      {
        productName: "WnW Jordan",
        category: "WnW",
        price: 1000,
        image: "Atome.jpg",
      },
      {
        productName: "Royal S1",
        category: "Royal",
        price: 2000,
        image: "jordan.jpg",
      },
      {
        productName: "KSW S",
        category: "KSW",
        price: 1600,
        image: "Nike3.jpg",
      },
      {
        productName: "WnW Mega",
        category: "WnW",
        price: 2400,
        image: "Nike2.jpg",
      },
      {
        productName: "KSL Pro",
        category: "KSL",
        price: 800,
        image: "Reebok.jpg",
      },
      {
        productName: "Royal Air",
        category: "Royalt",
        price: 1400,
        image: "reebok3.jpg",
      },
      {
        productName: "KSL Nitro",
        category: "KSL",
        price: 1300,
        image: "luxe.jpg",
      },
    ],
  };

  let totalPrice = 0;

  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container3");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "Rs " + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    //button
    let button = document.createElement("BUTTON")
    button.style.marginTop = "2rem";
    // container.style.display = "flex";
    // container.style.justifyContent = "center";
    // container.style.alignItems = "center";

    var text = document.createTextNode("Add to Cart");
    button.appendChild(text);
    card.appendChild(button);

    button.addEventListener('click', addToCart, false);

    // deleteElement = document.getElementById("delete-" + i.productName)
    // deleteElement && deleteElement.addEventListener("click", (event) => {
    //   // console.log(event);
    // })
  }

  function addToCart(event){
    let button  = event.target;
    let item = button.parentElement;

    let nameEle = item.getElementsByTagName("h5")[0].innerText;
    let priceEle = item.getElementsByTagName("h6")[0].innerText;

    let price = parseInt(priceEle.split(' ')[1]);
    totalPrice += price;

    let cartItem = document.getElementById("cartItem");
    if(cartItem.innerText === "Your cart is empty") {
      cartItem.innerText = '';
    }

    let totalElem = document.getElementById("total");
    totalElem.innerText = "Rs " + totalPrice;

    let newElement = document.createElement("h5");
    newElement.setAttribute("id", nameEle )
    newElement.innerText = nameEle;
    cartItem.appendChild(newElement);
    let deleteItem = document.createElement("i")
    deleteItem.setAttribute("class", "fa fa-trash fa-fw")
    deleteItem.setAttribute("id", "delete-" + newElement)
    deleteItem.style.float = "right"
    newElement.appendChild(deleteItem)

    console.log(cartItem.childElementCount);

    let cartIcon = document.getElementById("count");
    cartIcon.innerText = cartItem.childElementCount

    deleteItem.addEventListener('click', (e) => {
      let deleteButton = document.getElementById("delete-" + newElement);
      let rmvEle = deleteButton.parentElement;
      console.log(rmvEle.innerText);
      for(let prod of products.data) {
        if(rmvEle.innerText === prod.productName.toUpperCase()) {
          totalPrice -= prod.price;
          totalElem.innerText = "Rs " + totalPrice;
        } 
      }

      rmvEle.remove();
      let cartIcon = document.getElementById("count");
    cartIcon.innerText = cartItem.childElementCount
    }, false);
    
  }


// document.addEventListener("click", (event) => {
//   console.log(e.target);    
// })

  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

  const categories = [...new Set(products.map((item)=>
          {return item}))]
          let i=0;
          document.getElementById('root').innerHTML = categories.map((item)=>
          {
            var{productName, category, price, image} = item;
            return(
              `<div class='box'>
              <div class='image-box'>
              <img class='images' src=Rs{image}></img>
              </div>
              <div class = 'bottom>
              <p>Rs{title}</p>
              <h2>Rs Rs{price}.00</h2>`+
              "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
              `</div>
              </div>`
            )
          }).join('')

