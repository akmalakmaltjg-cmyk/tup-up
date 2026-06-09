let selectedDiamond = "";

function pilihDiamond(element, diamond) {

selectedDiamond = diamond;

let semua = document.querySelectorAll(".diamond");

semua.forEach(item => {
item.style.background = "white";
});

element.style.background = "#ffd6d6";

}

function beli() {

let id = document.getElementById("playerId").value;

if(id == ""){
alert("Masukkan ID");
return;
}

if(selectedDiamond == ""){
alert("Pilih Diamond");
return;
}

let nomor = "62895326359631";

let pesan =
"Halo Admin,%0A%0A" +
"Saya ingin top up Free Fire%0A" +
"ID : " + id + "%0A" +
"Diamond : " + selectedDiamond;

window.location.href =
"https://wa.me/" + nomor + "?text=" + pesan;

}