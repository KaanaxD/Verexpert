document.getElementById("guessInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Jika tombol yang ditekan adalah "Enter"
      event.preventDefault(); // Mencegah aksi default (misalnya submit form)
      document.getElementById("pencet").click(); // Memicu klik pada tombol dengan id "pencet"
  }
});

let randomNumber = 2;
let attempts = 0;
let rendah = ['red','orange','yellow'];
let tinggi = [ 'lightsalmon','aliceblue','cyan',];
let n = 0;

function checkGuess() {
  const userGuess = document.getElementById('guessInput').value;
  const message = document.getElementById('message');
  const percobaan = document.getElementById('Percobaan');
  attempts++;

  if (userGuess == randomNumber) {
    message.textContent = `Selamat! Anda menebak angka yang benar dalam ${attempts} percobaan!`;
    percobaan.textContent = 'Percobaan ke-' + attempts;
    message.style.color = 'greenyellow';
    
    const button = document.getElementById('pencet');
    button.id = 'resetButton';
    button.textContent = 'Reset';
  
    button.addEventListener('click', function() {
      location.reload();
    });
  
  } else if(userGuess>100 || userGuess<0){
    message.textContent ='1-100 we';
    percobaan.textContent = 'Percobaan ke-' + attempts;
    message.style.color = 'aliceblue'; 
    attempts--;
  } else if (userGuess > randomNumber) {
    message.textContent = 'Terlalu tinggi! Coba angka yang lebih rendah.';
    percobaan.textContent = 'Percobaan ke-' + attempts;
    message.style.color = tinggi[n];
    n+=1;
    if(n>2){
      n=0;
    }
  } else {
    message.textContent = 'Terlalu rendah! Coba angka yang lebih tinggi.';
    percobaan.textContent = 'Percobaan ke-' + attempts;
    message.style.color = rendah[n];
    n+=1;
    if(n>2){
      n=0;
    }
  }
}
