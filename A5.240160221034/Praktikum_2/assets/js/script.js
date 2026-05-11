const title = 'Portofolio Putri';

alert(title);
console.log('Selamat datang di website portofolio');

const umur = 20;

// IF ELSE
if (umur < 18) {
  console.log('Masih remaja');
} else {
  console.log('Sudah dewasa');
}

// TIMER
setTimeout(() => {
  console.log('Timer finished');
}, 1000);

// BLOCK SCOPE
if (true) {
  let hobi = [
    'Badminton',
    'Menonton film',
    'Mendengarkan musik'
  ];

  console.log(hobi);
}

// FUNCTION
function sapa() {
  alert('Halo, terima kasih sudah mengunjungi portofolio saya!');
}

// FUNCTION WARNA RANDOM
function generateRandomColor() {

  const colors = [
    'cornflowerblue',
    '#7BAAF7',
    '#89C2FF',
    '#A7C7FF'
  ];

  const randomIndex =
    Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

// UBAH BACKGROUND
function changeBackgroundColor() {
  document.body.style.backgroundColor =
    generateRandomColor();
}

// ARRAY
const skill = [
  'Canva',
  'Microsoft Word',
  'Microsoft Excel'
];

console.log(skill);

// LOOPING
for (let i = 0; i < skill.length; i++) {
  console.log(skill[i]);
}

// OBJECT
const mahasiswa = {
  nama: 'Putri',
  umur: 20,
  jurusan: 'Sistem Informasi'
};

console.log(mahasiswa);

// WINDOW ONLOAD
window.onload = function () {
  changeBackgroundColor();
}