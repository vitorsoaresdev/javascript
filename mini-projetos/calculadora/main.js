function Calculadora () {

    this.display = document.querySelector('.display');


    this.clickCapture = () => {
        document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('btn-num')) this.addNum(el);
        if (el.classList.contains('clear')) this.clearScreen();
        if (el.classList.contains('igual')) this.sumNum();
    });
};

    this.addNum = (el) => this.display.value += el.innerText;

    this.clearScreen = () => this.display.value = '';

    this.sumNum = () => {
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
};
}

const calcular = new Calculadora();
calcular.clickCapture();