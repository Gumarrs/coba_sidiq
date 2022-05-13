alert('Selamat Datang ..');
var lagi = true;

while (lagi === true) {
    var nama = prompt('Masukan Nama Anda :');
    console.log('hallo' + nama);
    lagi = confirm('Mau ubah nama?');
}
alert('Hallo' + nama + 'Selamat datang');
console.log('Terimakasih');

const heading = document.getElementById('head');
heading.innerHTML = 'Hello World'
function view(val) {
    document.getElementById("viewer").value += val;
}

function clean() {
    document.getElementById("viewer").value = "";
}

function backspace() {
    var val = document.getElementById("viewer").value;
    document.getElementById("viewer").value = val.substring(
        0,
        val.length - 1
    );
}

function equal() {
    var val = document.getElementById("viewer").value;
    if (val) {
        document.getElementById("viewer").value = eval(val);
    }
}
