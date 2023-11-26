var root = document.querySelector(':root');
var cssvar = getComputedStyle(root);
pd1 = cssvar.getPropertyValue('--pd1');
function up(element){
    element = "--" + element;
    tmp = cssvar.getPropertyValue(element);
    tmp = parseInt(tmp) + 1;
    document.documentElement.style.setProperty(element, tmp);
}
function down(element){
    element = "--" + element;
    tmp = cssvar.getPropertyValue(element);
    if(tmp > 0){
    tmp = parseInt(tmp) - 1;
    document.documentElement.style.setProperty(element, tmp);
    }
}
var sum = 0;
setInterval(function(){
    var count = 0;
    sum = 0;
    document.getElementById("cart-box").style.height = 39 + "px";
    for(var i = 1; i < 22; i++){
    var pd = "--pd" + i;
    pd = cssvar.getPropertyValue(pd);
    if(pd != "0"){
    count = count + 1;
    // if(count*92 + 39 < 500){
    var height = count*92 + 39;
    // }else height = 500;
    // height = height + "px";
    document.getElementById("cart-box").style.height = height;
    var pos = "pd" + i;
    document.getElementById(pos).style.display = "block";
    var value = "value" + i;
    document.getElementById(value).value = pd;
    var price = money(document.getElementById("price" + i).innerText);
    sum = sum + price*parseInt(pd);
    }else{
        var pos = "pd" + i;
        document.getElementById(pos).style.display = "none";
    }
    }
},0)
setInterval(function(){
    var money = "";
    sum = sum.toString();
    for(let i = sum.length - 1; i > -1; i--){
        if((sum.length - 1 - i) % 3 == 0 && (sum.length - 1 - i) != 0){
            money = "." + money;    
        }
        money = sum.charAt(i) + money;
    }
    document.getElementById("money").innerText = "$" + money;
})
function money(element){
    var money = "";
    for(let i = 1; i < element.length + 1; i++){
        money = money + element.charAt(i);
        }
 return(parseInt(money));
}

function showCart(){
    var display = cssvar.getPropertyValue("--cart-display");
    if(display == "block"){
        document.documentElement.style.setProperty("--cart-display","none");
    }
    if(display == "none"){
        document.documentElement.style.setProperty("--cart-display","block");
    }
}