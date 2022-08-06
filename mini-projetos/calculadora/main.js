// function Calculadora () {

//     this.display = document.querySelector('.display');

//     this.Start = () => {
//       this.clickCapture();
//     },

//     this.clickCapture = () => {
//         document.addEventListener('click', (e) => {
//         const el = e.target;
//         if (el.classList.contains('btn-num')) this.addNum(el);
//         if (el.classList.contains('clear')) this.clearScreen();
//         if (el.classList.contains('igual')) this.sumNum();
//     });
// };

//     this.addNum = (el) => this.display.value += el.innerText;

//     this.clearScreen = () => this.display.value = '';

//     this.sumNum = () => {
//         try {
//             const conta = eval(this.display.value);
      
//             if(!conta) {
//               alert('Conta inválida');
//               this.display.value = '';
//               return;
//             }
      
//             this.display.value = conta;
//           } catch(e) {
//             alert('Conta inválida');
//             this.display.value = '';
//             return;
//           }
// };
// }

// const calcular = new Calculadora();
// calcular.Start();





// function Calculadora() {
//  this.display = document.querySelector('.display');
// }

// Calculadora.prototype.Start = function() {
//   this.clickbuttons();
// }

// Calculadora.prototype.clickbuttons = function() {
//   document.addEventListener('click', (e) => {
//     const el = e.target;

//     if (el.classList.contains('btn-num')) this.adicionarNum(el);
//     if (el.classList.contains('clear')) this.limpaTela();
//     if (el.classList.contains('igual')) this.fazConta();
//   })
// }

// Calculadora.prototype.adicionarNum = function(el) {
//   this.display.value += el.innerText;
// }

// Calculadora.prototype.limpaTela = function() {
//   this.display.value = ''
// }

// Calculadora.prototype.fazConta = function() {
//         try {
//           const conta = eval(this.display.value);
  
//         if(!conta) {
//           alert('Conta inválida');
//           this.display.value = '';
//           return;
//         }
  
//         this.display.value = conta;
//       } catch(e) {
//         alert('Conta inválida');
//         this.display.value = '';
//         return;
//       }
// }

// const calcular = new Calculadora();
// calcular.Start();

class Calculadora {
  constructor() {
    this.display = document.querySelector('.display')
  }

  Start() {
    this.clickButtons();
  }

  clickButtons() {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) this.adicionarNum(el);
      if (el.classList.contains('clear')) this.limpaTela();
      if (el.classList.contains('igual')) this.fazConta();
    })
  }

  adicionarNum(el) {
    this.display.value += el.innerText;
  }

  limpaTela() {
    this.display.value = '';
  }

  fazConta() {
     try {
        const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        this.display.value = '';
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      this.display.value = '';
      return;
    }
  }
};

const calcular = new Calculadora();
calcular.Start();