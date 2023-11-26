// Biến thông tin sản phẩm
var mproduct=[
    "Iphone 15 Pro Max 256 GB",
    "Ipad mini 6 Wifi 64 GB",
    "MacBook Air 15'' M2",
    "MacBook Air 13'' M2",
    "Tai nghe AirPods 3 2022",
    "Magic Trackpad 2 2022",
    "Tai nghe AirPods 2",
    "Magic Mouse 2 2022",
    "Ipad Pro 11 inch 2022 M2 128 GB",
    "Ipad Air 5 10.9 inch 2022 64 GB",
    "MacBook Pro 14'' M2",
    "MACBOOK AIR 13'' M1",
    "Tai nghe AirPods Pro 2022",
    "Iphone 14 Pro Max 128 GB",
    "Iphone 15 Plus Case MagSafe",
    "USB-C to Lightning Apple Cable",
    "MacBook Pro 13'' M2",
    "AirTag",
    "Iphone 13 Pro Max 256 GB",
    "Magic Keyboard 2022 Full",
    "Apple Power Adapter 20W Type-C",
  ]
var mprice=[
    "30.990.000₫",
    "74.990.000₫",
    "17.990.000₫",
    "177.990.000₫",
    "26.490.000đ"
  ]
//
function searchshow(){
    document.getElementById("m-search-bar").style.animation = "search-show 0.75s";
    document.getElementById("m-search-button").style.animation = "button-show 0.75s";
    document.documentElement.style.setProperty("--m-search-bar-width","35vw");
    document.documentElement.style.setProperty("--m-search-button-margin", "31.5vw");

}

function resultShow(){
    document.getElementById("m-result-menu").style.display = "block";
    document.getElementById("m-back-box").style.display = "block";
    var searchEngine = setInterval(function(){
        document.getElementById("m-noresult").style.display = "none";
        document.getElementById("m-result-menu").style.animation = "result-show 0.75s";
        document.documentElement.style.setProperty("--m-result-menu-opacity","100");
        document.documentElement.style.setProperty("--m-show-backbox","block");
        document.documentElement.style.setProperty("--m-show-result1","none");
        document.documentElement.style.setProperty("--m-show-result2","none");
        document.documentElement.style.setProperty("--m-show-result3","none");
        var msearchinput = document.getElementById("m-search-input").value;
        for(let i = 0; i < mproduct.length; i++){
            if(mproduct[i].toLocaleLowerCase().includes(msearchinput.toLocaleLowerCase())){
                document.getElementById("m-result1").innerHTML = mproduct[i];
                document.documentElement.style.setProperty("--m-show-result1","block");
                i++
                for(let j = i; j < mproduct.length; j++){
                    if(mproduct[j].toLocaleLowerCase().includes(msearchinput.toLocaleLowerCase())){
                        document.getElementById("m-result2").innerHTML = mproduct[j];
                        document.documentElement.style.setProperty("--m-show-result2","block");
                        j++
                        for(let k = j; k < mproduct.length; k++){
                            if(mproduct[k].toLocaleLowerCase().includes(msearchinput.toLocaleLowerCase())){
                                document.getElementById("m-result3").innerHTML = mproduct[k];
                                document.documentElement.style.setProperty("--m-show-result3","block");
                                break;
                            }
                        }
                        break;
                    }
                }
                break;
            }
        if(i == (mproduct.length - 1)){
            document.getElementById("m-noresult").style.display = "block";
        }
        }
    },0)
}
function searchHide(){
    clearInterval(resultShow);
    document.getElementById("m-back-box").style.display = "none";
    document.getElementById("m-result-menu").style.display = "none";
}
