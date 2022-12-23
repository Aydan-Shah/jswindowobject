// console.log(this); // this uzerinde oldugumuz obyekt demekdir. en genel obyekt windowsdur
// console.log(this.alert("Alert"));
// console.log(window); // = this

/* Alert */
// alert("Merhaba");

/* Confirm */
// const cavab = confirm("Eminmisiniz?");
// // console.log(cavab);
// if(cavab) {
//    console.log("Silin Gitsin");
// } else {
//    console.log("Silmeyin")
// }


/* Prompt */
// const cavab = prompt("2+2 = ?");
// // console.log(cavab);
// // console.log(typeof cavab);
// if(cavab == "4") {
//    console.log("Dogru");
// } else {
//    console.log("Yanlis");
// }

let value;
value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// if(confirm("Sehife yenilensin?")) {
//    window.location.reload();
// } else {
//    console.log("sehife yenilenmedi")
// }

value = window.outerHeight;
value = window.outerWidth;
value = window.innerHeight;
value = window.innerWidth;
value = window.scrollX;
value = window.scrollY;
console.log(value)
