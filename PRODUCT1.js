setInterval(function(){
    var Width = document.getElementById("list-products").offsetWidth;
    Width += 20;
    var padding  = (document.getElementById("wp-products").offsetWidth - Math.round(Width/310 - 0.5) * 310 + 20)/2;
    document.getElementById("wp-products").style.paddingLeft = (padding+"px");
})

function showProductDetails(name, description, price, image) {
    document.getElementById('productName').innerText = name;
    document.getElementById('productDescription').innerText = description;
    document.getElementById('productPrice').innerText = price;
    document.getElementById('productImage').src = image;
    document.getElementById('productDetails').style.display = 'flex';
  }
  
  function hideProductDetails() {
    document.getElementById('productDetails').style.display = 'none';
  }
  
  function allShow(){
    document.documentElement.style.setProperty("--iphone-show","block");
    document.documentElement.style.setProperty("--macbook-show","block");
    document.documentElement.style.setProperty("--ipad-show","block");
    document.documentElement.style.setProperty("--airpod-show","block");
    document.documentElement.style.setProperty("--accessory-show","block");
    document.getElementById("all-button").style.color = "white";
    document.getElementById("all-button").style.backgroundColor = "black";
    document.getElementById("iphone-button").style.color = "black";
    document.getElementById("iphone-button").style.backgroundColor = "white";
    document.getElementById("macbook-button").style.color = "black";
    document.getElementById("macbook-button").style.backgroundColor = "white";
    document.getElementById("ipad-button").style.color = "black";
    document.getElementById("ipad-button").style.backgroundColor = "white";
    document.getElementById("airpod-button").style.color = "black";
    document.getElementById("airpod-button").style.backgroundColor = "white";
    document.getElementById("accessory-button").style.color = "black";
    document.getElementById("accessory-button").style.backgroundColor = "white";
    
}
function iphoneShow(){
    document.documentElement.style.setProperty("--iphone-show","block");
    document.documentElement.style.setProperty("--macbook-show","none");
    document.documentElement.style.setProperty("--ipad-show","none");
    document.documentElement.style.setProperty("--airpod-show","none");
    document.documentElement.style.setProperty("--accessory-show","none");
    document.getElementById("all-button").style.color = "black";
    document.getElementById("all-button").style.backgroundColor = "white";
    document.getElementById("iphone-button").style.color = "white";
    document.getElementById("iphone-button").style.backgroundColor = "black";
    document.getElementById("macbook-button").style.color = "black";
    document.getElementById("macbook-button").style.backgroundColor = "white";
    document.getElementById("ipad-button").style.color = "black";
    document.getElementById("ipad-button").style.backgroundColor = "white";
    document.getElementById("airpod-button").style.color = "black";
    document.getElementById("airpod-button").style.backgroundColor = "white";
    document.getElementById("accessory-button").style.color = "black";
    document.getElementById("accessory-button").style.backgroundColor = "white";
}
function macbookShow(){
    document.documentElement.style.setProperty("--iphone-show","none");
    document.documentElement.style.setProperty("--macbook-show","block");
    document.documentElement.style.setProperty("--ipad-show","none");
    document.documentElement.style.setProperty("--airpod-show","none");
    document.documentElement.style.setProperty("--accessory-show","none");
    document.getElementById("all-button").style.color = "black";
    document.getElementById("all-button").style.backgroundColor = "white";
    document.getElementById("iphone-button").style.color = "black";
    document.getElementById("iphone-button").style.backgroundColor = "white";
    document.getElementById("macbook-button").style.color = "white";
    document.getElementById("macbook-button").style.backgroundColor = "black";
    document.getElementById("ipad-button").style.color = "black";
    document.getElementById("ipad-button").style.backgroundColor = "white";
    document.getElementById("airpod-button").style.color = "black";
    document.getElementById("airpod-button").style.backgroundColor = "white";
    document.getElementById("accessory-button").style.color = "black";
    document.getElementById("accessory-button").style.backgroundColor = "white";
}
function ipadShow(){
    document.documentElement.style.setProperty("--iphone-show","none");
    document.documentElement.style.setProperty("--macbook-show","none");
    document.documentElement.style.setProperty("--ipad-show","block");
    document.documentElement.style.setProperty("--airpod-show","none");
    document.documentElement.style.setProperty("--accessory-show","none");
    document.getElementById("all-button").style.color = "black";
    document.getElementById("all-button").style.backgroundColor = "white";
    document.getElementById("iphone-button").style.color = "black";
    document.getElementById("iphone-button").style.backgroundColor = "white";
    document.getElementById("macbook-button").style.color = "black";
    document.getElementById("macbook-button").style.backgroundColor = "white";
    document.getElementById("ipad-button").style.color = "white";
    document.getElementById("ipad-button").style.backgroundColor = "black";
    document.getElementById("airpod-button").style.color = "black";
    document.getElementById("airpod-button").style.backgroundColor = "white";
    document.getElementById("accessory-button").style.color = "black";
    document.getElementById("accessory-button").style.backgroundColor = "white";
}
function airpodShow(){
    document.documentElement.style.setProperty("--iphone-show","none");
    document.documentElement.style.setProperty("--macbook-show","none");
    document.documentElement.style.setProperty("--ipad-show","none");
    document.documentElement.style.setProperty("--airpod-show","block");
    document.documentElement.style.setProperty("--accessory-show","none");
    document.getElementById("all-button").style.color = "black";
    document.getElementById("all-button").style.backgroundColor = "white";
    document.getElementById("iphone-button").style.color = "black";
    document.getElementById("iphone-button").style.backgroundColor = "white";
    document.getElementById("macbook-button").style.color = "black";
    document.getElementById("macbook-button").style.backgroundColor = "white";
    document.getElementById("ipad-button").style.color = "black";
    document.getElementById("ipad-button").style.backgroundColor = "white";
    document.getElementById("airpod-button").style.color = "white";
    document.getElementById("airpod-button").style.backgroundColor = "black";
    document.getElementById("accessory-button").style.color = "black";
    document.getElementById("accessory-button").style.backgroundColor = "white";
}
function accessoryShow(){
    document.documentElement.style.setProperty("--iphone-show","none");
    document.documentElement.style.setProperty("--macbook-show","none");
    document.documentElement.style.setProperty("--ipad-show","none");
    document.documentElement.style.setProperty("--airpod-show","none");
    document.documentElement.style.setProperty("--accessory-show","block");
    document.getElementById("all-button").style.color = "black";
    document.getElementById("all-button").style.backgroundColor = "white";
    document.getElementById("iphone-button").style.color = "black";
    document.getElementById("iphone-button").style.backgroundColor = "white";
    document.getElementById("macbook-button").style.color = "black";
    document.getElementById("macbook-button").style.backgroundColor = "white";
    document.getElementById("ipad-button").style.color = "black";
    document.getElementById("ipad-button").style.backgroundColor = "white";
    document.getElementById("airpod-button").style.color = "black";
    document.getElementById("airpod-button").style.backgroundColor = "white";
    document.getElementById("accessory-button").style.color = "white";
    document.getElementById("accessory-button").style.backgroundColor = "black";
}

