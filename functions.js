class Conta {
    constructor(saldoInicial, senha) {
      this._saldo = saldoInicial;
      this._senha = senha;
    }
  
    deposito(valor, senha) {
      if (senha !== this._senha) {
        console.log("Senha incorreta!");
        return;
      }
      this._saldo += valor;
      console.log(`Depósito realizado com sucesso! Novo saldo: ${this._saldo}`);
    }
  
    retirada(valor, senha) {
      if (senha !== this._senha) {
        console.log("Senha incorreta!");
        return;
      }
      if (valor > this._saldo) {
        console.log("Saldo insuficiente!");
        return;
      }
      this._saldo -= valor;
      console.log(`Retirada realizada com sucesso! Novo saldo: ${this._saldo}`);
    }
  }
  
  class ContaPoupanca extends Conta {
    atualizaJuros() {
      const juros = this._saldo * 0.007;
      this._saldo += juros;
      console.log(`Juros atualizados! Novo saldo: ${this._saldo}`);
    }
  }
  class PoupancaPremium extends ContaPoupanca {
    constructor(saldo, senha) {
      super(saldo, senha);
    }
  
    atualizaJuros() {
      const taxa = 1.2 / 100;
      const novoSaldo = this.saldo + (this.saldo * taxa);
      this.saldo = novoSaldo;
      console.log(`Juros atualizados! Novo saldo: ${this._saldo}`);
    }
  }
  
  
  
  
  // teste
  const contaPoupanca = new PoupancaPremium(1000, "123456");
  contaPoupanca.deposito(500, "123456"); // Depósito realizado com sucesso! Novo saldo: 1500
  contaPoupanca.retirada(200, "123456"); // Retirada realizada com sucesso! Novo saldo: 1300
  contaPoupanca.atualizaJuros(); // Juros atualizados! Novo saldo: 1310.1