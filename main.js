var html = items.results
  .map(items => {
    return `
    <div class = "product">
    <a href="${items.url}" target="_blank" >

    <p class="pic" ><img src ="${items.Images[0].url_fullxfull}"></P>

    <h4 class="newTitle" >${items.title}</h4>

    <p class="shopName" >${items.Shop.shop_name}</p>

    <p class="price">$dollar; ${items.price}</p>
    </a>
    </div>
  </div>
  `
  })

  .join("")

document.querySelector("#main").innerHTML = html
