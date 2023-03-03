window.onload = function () {

  // -----Variables--------
  var add = document.getElementById("add");
  var remove = document.getElementById("remove");
  var submit = document.getElementById("submit");
  var totalMsg = document.getElementById("amount");
  var refreshBtn = document.getElementById("refresh-btn")
  var pic1 = document.getElementById("pic1");
  var pic2 = document.getElementById("pic2");
  var pic3 = document.getElementById("pic3");
  var pic4 = document.getElementById("pic4");
  var kPrice = document.getElementById("keychain-price");
  var sPrice = document.getElementById("sticker-price");
  var pPrice = document.getElementById("print-price");
  var cPrice = document.getElementById("card-price");
  var remove = document.getElementById("remove");
  var thank = document.getElementById("thanks-section");
  var keychainPrice = 10;
  var stickerPrice = 3;
  var printPrice = 4;
  var cardPrice = 5;
  var inventoryCalculate = [];
  var totalCost;

  // -------display-------
  pic1.style.display = "none";
  pic2.style.display = "none";
  pic3.style.display = "none";
  pic4.style.display = "none";
  kPrice.style.display = "none";
  sPrice.style.display = "none";
  pPrice.style.display = "none";
  cPrice.style.display = "none";
  thank.style.display = "none";

  //-------Event listeners---------
  var formHandle = document.forms.inventory_form;
  formHandle.onchange = processForm;
  add.onclick = addItems;
  submit.onclick = calculateCost;
  remove.onclick = removeItem;
  refreshBtn.onclick = refreshPage;

  //-----Function for displaying the inventory items-------
  function processForm() {

    if (in_inventory.value === "keychain") {
      pic1.style.display = "block";
      kPrice.style.display = "block";
    }

    if (in_inventory.value === "sticker") {
      pic2.style.display = "block";
      sPrice.style.display = "block";
    }

    if (in_inventory.value === "print") {
      pic3.style.display = "block";
      pPrice.style.display = "block";
    }

    if (in_inventory.value === "card") {
      pic4.style.display = "block";
      cPrice.style.display = "block";
    }
  }

  // ----Function to add the cost of inventory items into the array------
  function addItems() {
    if (in_inventory.value === "keychain") {
      inventoryCalculate.push(keychainPrice);
    }

    if (in_inventory.value === "sticker") {
      inventoryCalculate.push(stickerPrice);
    }

    if (in_inventory.value === "print") {
      inventoryCalculate.push(printPrice);
    }

    if (in_inventory.value === "card") {
      inventoryCalculate.push(cardPrice);
    }
    console.log(inventoryCalculate);
  }

  // ------Function to remove inventory items from the array------
  function removeItem() {
    if (in_inventory.value === "keychain") {
      inventoryCalculate.splice(inventoryCalculate.indexOf(keychainPrice), 1);
      pic1.style.display = "none";
      kPrice.style.display = "none";
    }

    if (in_inventory.value === "sticker") {
      inventoryCalculate.splice(inventoryCalculate.indexOf(stickerPrice), 1);
      pic2.style.display = "none";
      sPrice.style.display = "none";
    }

    if (in_inventory.value === "print") {
      inventoryCalculate.splice(inventoryCalculate.indexOf(printPrice), 1);
      pic3.style.display = "none";
      pPrice.style.display = "none";
    }

    if (in_inventory.value === "card") {
      inventoryCalculate.splice(inventoryCalculate.indexOf(cardPrice), 1);
      pic4.style.display = "none";
      cPrice.style.display = "none";
    }
    console.log(inventoryCalculate);
  }

  // ------Calculate the total amount of the price owned, from the values inside the array------
  function calculateCost() {
    var sum = 0;
    for (var i = 0; i < inventoryCalculate.length; i++) {
      sum = sum + inventoryCalculate[i]
    }
    console.log(sum);
    thank.style.display = "block";
    totalMsg.innerHTML = "$" + sum;
    return sum;
  }

  // -----Function to refresh the page-------
  function refreshPage() {
    window.location.reload();
  }

}
