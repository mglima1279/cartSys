export class item{
  constructor(nam, imgNam, price){
    this.name = nam;
    this.price = price.toFixed(2);
    this.imgNam = imgNam;

    this.htmlEl = document.createElement("div");  
    this.img = document.createElement("img");
    this.img.src = `./styles/imgs/${this.imgNam}`
    this.nameSlot = document.createElement("div");
    this.priceSlot = document.createElement("div");

    const slotsWrappers = document.createElement("div");


    this.nameSlot.textContent = this.name;
    this.priceSlot.textContent = `X$${this.price}`;

    slotsWrappers.appendChild(this.nameSlot);
    slotsWrappers.appendChild(this.priceSlot);
    
    this.htmlEl.appendChild(this.img);
    this.htmlEl.appendChild(slotsWrappers);

    this.htmlEl.classList.add("item");
  }
}

export class cartEl{
  constructor(nam, imgNam, price){
    this.price = price;
    this.nameValue = nam;
    this.imgNam = imgNam;

    this.htmlEl = document.createElement("div");
    this.htmlEl.classList.add("cartItem");
    
    this.leftArrow = document.createElement("i");
    this.leftArrow.classList.add("fa-solid");
    this.leftArrow.classList.add("fa-chevron-left");
    
    this.rightArrow = document.createElement("i");
    this.rightArrow.classList.add("fa-solid");
    this.rightArrow.classList.add("fa-chevron-right");

    this.amount = document.createElement("span");
    this.amountValue = 0;
    this.amount.textContent = this.amountValue;

    const numberHandlers = document.createElement("div");

    numberHandlers.appendChild(this.leftArrow);
    numberHandlers.appendChild(this.amount);
    numberHandlers.appendChild(this.rightArrow);
    this.htmlEl.appendChild(numberHandlers);

    this.name = document.createElement("span");
    this.name.textContent = nam;
    this.htmlEl.appendChild(this.name);

    this.priceSpan = document.createElement("span");
    this.priceSpan.innerHTML = `X$${this.price}`;
    this.htmlEl.appendChild(this.priceSpan);

    const newImg = document.createElement("img");
    newImg.src = `./styles/imgs/${this.imgNam}`;
    this.htmlEl.appendChild(newImg);
  }
}
