var click = 0;
var clickadd = 1;
var iphone4s = "https://www.91-img.com/pictures/apple-iphone-4s-8gb-mobile-phone-large-1.jpg";
var iphone5s = "https://images-na.ssl-images-amazon.com/images/I/81YP7pPzFCL._SX569_.jpg";
var iphone6 = "https://images-na.ssl-images-amazon.com/images/I/81aaPi-hh6L._SX569_.jpg";
var iphone6plus = "https://images-na.ssl-images-amazon.com/images/I/81%2BPv8Vqb9L._SL1500_.jpg";
var iphone6s = "https://www.att.com/catalog/en/idse/Apple/Apple%20iPhone%206s/Space%20Gray-hero-zoom.png"
var iphone6splus = "https://www.att.com/catalog/en/idse/Apple/Apple%20iPhone%206s%20Plus%20-%20AT&T%20PREPAID%20__299_99%20+%20_45%20toward%20plan_/Space%20Gray-hero-zoom.png"
var iphone7 = "https://ss7.vzw.com/is/image/VerizonWireless/iphone7-front-matblk?$device-lg$";
var iphone7plus = "https://media.tracfone.com/wps/contenthandler/dav/content/libraries/wcm.library.phones/components/GPAPI7C32RGP2/wcm.comps.image/iphone_7_rose-gold_large.png";
var iphone8 = "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-8/space-gray/device-front.png";
var iphone8plus = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZe0sdw-JkUsVSj9Vj-GoEB4uXr88mrVbolS9Nx8naW2wNA_IBQ";
var iphone10 = "https://www.att.com/catalog/en/idse/Apple/Apple%20iPhone%20X/Space%20Gray-hero-zoom.png";
var iphone10s = "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-xs-max/gold/Apple-iPhoneXsMax-Gold-1-3x.jpg"
var iphone10smax = "https://www.91-cdn.com/pricebaba-images/images/product/mobile/51131/apple-iphone-xs-max-256gb-raw-258102.jpg";
var iphone11 = "https://www.att.com/catalog/en/idse/Apple/Apple%20iPhone%2011/Purple-hero-zoom.png";
var iphone11pro = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-space-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566954989577";
var iphone11promax = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-midnight-green-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566953859350";

function clickButton() {
      click = click + clickadd;
      document.getElementById('ya').innerHTML = String(click);
      document.getElementById('perclick').innerHTML = String(clickadd);
      document.title = String(click) + " iPhones | iPhone Clicker";
    }

function buySomething(phone) {
  if (phone === iphone4s && 199 < click) {
    clickadd = 2;
    click = click - 200;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 4s";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone5s && 499 < click) {
    clickadd = 4;
    click = click - 500;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 5s";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
    
  }
  if (phone === iphone6 && 999 < click) {
    clickadd = 8;
    click = click - 1000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById("phone").style.width = "100%";
    document.getElementById('model').innerHTML = "iPhone 6";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone6plus && 1499 < click) {
    clickadd = 16;
    click = click - 1500;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "25%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 6 Plus";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone6s && 2499 < click) {
    clickadd = 32;
    click = click - 2500;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "60%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 6s";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone6splus && 3499 < click) {
    clickadd = 64;
    click = click - 3500;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "70%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 6s Plus";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone7 && 9999 < click) {
    clickadd = 128;
    click = click - 10000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 7";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone7plus && 19999 < click) {
    clickadd = 258;
    click = click - 20000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 7 Plus";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone8 && 39999 < click) {
    clickadd = 516;
    click = click - 40000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "30%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 8";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  
  if (phone === iphone8plus && 59999 < click) {
    clickadd = 1032;
    click = click - 60000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "60%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 8 Plus";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone8plus").style.display = "none";
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone10 && 89999 < click) {
    clickadd = 2064;
    click = click - 90000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone X";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone10").style.display = "none";
    document.getElementById("iphone8plus").style.display = "none";
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  
  if (phone === iphone10s && 139999 < click) {
    clickadd = 4128;
    click = click - 140000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "25%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone Xs";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone10s").style.display = "none";
    document.getElementById("iphone10").style.display = "none";
    document.getElementById("iphone8plus").style.display = "none";
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone10smax && 199999 < click) {
    clickadd = 8256;
    click = click - 200000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "70%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone Xs Max";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone10smax").style.display = "none";
    document.getElementById("iphone10s").style.display = "none";
    document.getElementById("iphone10").style.display = "none";
    document.getElementById("iphone8plus").style.display = "none";
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
    
  }
  if (phone === iphone11 && 999999 < click) {
    clickadd = 16508;
    click = click - 1000000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").style.width = "80%";
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 11";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone11").style.display = "none";
    document.getElementById("iphone10smax").style.display = "none";
    document.getElementById("iphone10s").style.display = "none";
    document.getElementById("iphone10").style.display = "none";
    document.getElementById("iphone8plus").style.display = "none";
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone11pro && 5999999 < click) {
    clickadd = 33016;
    click = click - 6000000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 11 Pro";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone11pro").style.display = "none";
    document.getElementById("iphone11").style.display = "none";
    document.getElementById("iphone10smax").style.display = "none";
    document.getElementById("iphone10s").style.display = "none";
    document.getElementById("iphone10").style.display = "none";
    document.getElementById("iphone8plus").style.display = "none";
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
  if (phone === iphone11promax && 9999999 < click) {
    clickadd = 66032;
    click = click - 10000000;
    document.getElementById('ya').innerHTML = String(click);
    document.getElementById("phone").src = phone;
    document.getElementById('model').innerHTML = "iPhone 11 Pro Max";
    document.getElementById('perclick').innerHTML = String(clickadd);
    document.getElementById("iphone11promax").style.display = "none";
    document.getElementById("iphone11pro").style.display = "none";
    document.getElementById("iphone11").style.display = "none";
    document.getElementById("iphone10smax").style.display = "none";
    document.getElementById("iphone10s").style.display = "none";
    document.getElementById("iphone10").style.display = "none";
    document.getElementById("iphone8plus").style.display = "none";
    document.getElementById("iphone8").style.display = "none";
    document.getElementById("iphone7plus").style.display = "none";
    document.getElementById("iphone7").style.display = "none";
    document.getElementById("iphone6splus").style.display = "none";
    document.getElementById("iphone6s").style.display = "none";
    document.getElementById("iphone6plus").style.display = "none";
    document.getElementById("iphone6").style.display = "none";
    document.getElementById("iphone5s").style.display = "none";
    document.getElementById("iphone4s").style.display = "none";
  }
}
