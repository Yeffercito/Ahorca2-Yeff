const text = document.getElementById("text");
const text1 = document.getElementById("text1");
const img = document.getElementById("imge");
const letra = document.getElementById("letra");
const vocal = document.getElementById("vocal");
const button = document.getElementById("button");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const cont_fail = document.getElementById("cont_fail");
const cont_letras = document.getElementById("cont_letras");
const cont_palabras = document.getElementById("cont_palabras");
const usadas = document.getElementById("usadas");
const inputos = document.getElementById("inputos");
const butones = document.getElementById("butones");
const container1 = document.getElementById("container11");

let contfail = 1;
let descontfail = 7;
let cambio = 0;
let ganador = 1;
let aaa = 0;
let fin = 0;
let valor = "";
let valor1 = "";
let valid_array = 0;

const jueguito = [
  "perro",
  "tortuga",
  "gato",
  "ballena",
  "mamut",
  "dinosaurio",
  "elefante",
  "gallina",
  "leon",
  "bufalo",
  "cucaracha",
  "foca",
  "hipopotamo",
  "jirafa",
  "lemur",
  "pelicano",
  "rana",
  "vaca",
  "oveja",
  "caballo",
  "conejo",
  "puma",
  "coyote",
  "oso",
  "loro",
  "camello",
  "ardilla",

];
let jueguito1 = [];
let jueguito2 = [];
let randomm = Math.floor(Math.random() * jueguito.length);

let palabrita = jueguito[randomm];
jueguito.splice(randomm, 1);
for (let i = 0; i < palabrita.length; i++) {
  letra.innerHTML += `<div id="letra${i}"  style="border-bottom: 0.188rem solid black; width: 1.25rem;height: 1.25rem">
    </div>`;
}

cont_fail.innerHTML = ` Le quedan ${descontfail} oportunidades`;

button2.addEventListener("click", function () {
  contfail = 1;
  descontfail = 7;
  cambio = 0;
  ganador = 1;
  aaa = 0;
  fin = 0;
  valor = "";
  valor1 = "";
  jueguito1 = [];
  jueguito2 = [];

  cont_letras.innerHTML = "";
  cont_palabras.innerHTML = "";
  letra.innerHTML = ``;
  randomm = Math.floor(Math.random() * jueguito.length);
  palabrita = jueguito[randomm];
  jueguito.splice(randomm, 1);
  for (let i = 0; i < palabrita.length; i++) {
    letra.innerHTML += `<div id="letra${i}"  style="border-bottom: 0.188rem solid black; width: 1.25rem;height: 1.25rem">
      </div>`;
  }

  img.innerHTML = `<img id="img1" src="./assets/img1.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
  cont_fail.innerHTML = ` Le quedan ${descontfail} oportunidades`;

  text1.classList = "remove";
  text.classList.remove("remove");
  button1.classList = "remove";
  button.classList.remove("remove");
  text1.value = "";
});

text.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    valor = text.value;
    valor = valor.toLocaleLowerCase();
    text.value = "";
    valid_arr(valor, jueguito1);
    if (fin != 1 && valid_array === 0) {
      jueguito1.push(valor);
      cont_letras.innerHTML += `<div style="border-bottom: 0px solid black; width: 1.875rem;text-align:center"><u>${valor}</u>
      </div>`;
      for (let i = 0; i < palabrita.length; i++) {
        if (valor == palabrita[i]) {
          aaa = document.getElementById(`letra${i}`);
          aaa.innerHTML = `<div id="letra${i}"  style="border-bottom: 0px solid black; width: 1.25rem;text-align:center">${valor}
</div>`;
          cambio = 1;
          winner();
        }
      }
      if (cambio != 1) {
        failed();
      }
      cambio = 0;
    }
    valid_array = 0;
  }
});

text1.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    valor1 = text1.value;
    valor1 = valor1.toLocaleLowerCase();
    text1.value = "";
    valid_arr(valor1, jueguito2);
    console.log(valid_array);
    if (fin != 1 && valid_array === 0) {
      jueguito2.push(valor1);
      cont_palabras.innerHTML += `<div style="border-bottom: 0px solid black; width: 1.875rem;text-align:center"><u>${valor1}</u>
      </div>`;
      if (valor1 === palabrita) {
        for (let i = 0; i < palabrita.length; i++) {
          console.log("hola");
          console.log(palabrita.length);
          console.log(palabrita);
          aaa = document.getElementById(`letra${i}`);
          aaa.innerHTML = `<div id="letra${i}"  style="border-bottom: 0px solid black; width: 1.25rem;text-align:center">${palabrita[i]}
  </div>`;
          cambio = 1;
          winner();
        }
      } else {
        failed();
      }
    }
    valid_array = 0;
  }
});

button.addEventListener("click", function () {
  text.classList = "remove";
  text1.classList.remove("remove");
  button.classList = "remove";
  button1.classList.remove("remove");
  text.value = "";
});

button1.addEventListener("click", function () {
  text1.classList = "remove";
  text.classList.remove("remove");
  button1.classList = "remove";
  button.classList.remove("remove");
  text1.value = "";
});

function failed() {
  contfail++;
  descontfail--;
  if (fin != 1) {
    if (descontfail !== 0) {
      switch (contfail) {
        case 2:
          img.innerHTML = `<img id="img1" src="./assets/img2.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
          break;
        case 3:
          img.innerHTML = `<img id="img1" src="./assets/img3.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
          break;
        case 4:
          img.innerHTML = `<img id="img1" src="./assets/img4.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
          break;
        case 5:
          img.innerHTML = `<img id="img1" src="./assets/img5.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
          break;
        case 6:
          img.innerHTML = `<img id="img1" src="./assets/img6.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
          break;
        case 7:
          img.innerHTML = `<img id="img1" src="./assets/img7.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
          break;
        case 8:
          img.innerHTML = `<img id="img1" src="./assets/img8.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
          break;
      }
      // console.log(descontfail);
    } else {
      console.log("perdio");
      fin = 1;
      final_feliz();
    }
    cont_fail.innerHTML = ` Le quedan ${descontfail} oportunidades`;
  }
}

function winner() {
  // console.log(ganador);
  if (fin != 1) {
    if (palabrita.length === ganador) {
      fin = 1;
      final_feliz();
      console.log("gano pai");
    } else {
      ganador++;
    }
  }
}

function valid_arr(vlr, pala) {
  for (let i = 0; i < pala.length; i++) {
    if (vlr === pala[i]) {
      valid_array = 1;
    }
  }
}
function final_feliz() {
  container1.classList.remove("remove");
  // button2.value = "Volver a jugar";
  cont_fail.classList = "remove";
  letra.classList = "remove";
  usadas.classList = "remove";
  butones.classList = "remove";
  inputos.classList = "remove";
  img.classList = "remove";

  if (palabrita.length === ganador) {
    container1.innerHTML = `
    <div id="p">
  La respuesta es ${palabrita.toLocaleUpperCase()} </div>
    <div>
    <img src="./assets/winner.png" alt="" style="width: 31.25rem; height: 31.25rem;">
</div><div>
<button  id="button3" value="Volver a jugar">Volver a jugar</button>
</div>`;
  } else {
    container1.innerHTML = ` 
    <div id="p">
  La respuesta es ${palabrita.toLocaleUpperCase()} </div>
<div>
    <img src="./assets/loser.png" alt="" style="width: 31.25rem; height: 31.25rem;">
</div>
<div>
    <input type="button" id="button3" value="Volver a jugar">
</div> 
`;
  }
  const button3 = document.getElementById("button3");
  button3.addEventListener("click", function () {
    cont_fail.classList.remove("remove");
    letra.classList.remove("remove");
    usadas.classList.remove("remove");
    butones.classList.remove("remove");
    inputos.classList.remove("remove");
    img.classList.remove("remove");
    container1.classList = "remove";

    contfail = 1;
    descontfail = 7;
    cambio = 0;
    ganador = 1;
    aaa = 0;
    fin = 0;
    valor = "";
    valor1 = "";
    jueguito1 = [];
    jueguito2 = [];

    cont_letras.innerHTML = "";
    cont_palabras.innerHTML = "";
    letra.innerHTML = ``;
    randomm = Math.floor(Math.random() * jueguito.length);
    palabrita = jueguito[randomm];
    jueguito.splice(randomm, 1);
    for (let i = 0; i < palabrita.length; i++) {
      letra.innerHTML += `<div id="letra${i}"  style="border-bottom: 0.188rem solid black; width: 1.25rem;height: 1.25rem">
      </div>`;
    }

    img.innerHTML = `<img id="img1" src="./assets/img1.jpeg" alt="" style="width: 31.25rem; height: 31.25rem;"> `;
    cont_fail.innerHTML = ` Le quedan ${descontfail} oportunidades`;

    text1.classList = "remove";
    text.classList.remove("remove");
    button1.classList = "remove";
    button.classList.remove("remove");
    text1.value = "";
  });
}
