"use strict";

// Klasse wird in Funktion umgewandelt => Stellt Konstruktor dar
function BankAccount(balance) {
    this._initialBalance = balance;
    this._withdraws = [];
};

//Einzelne Methoden werden über prototyp Eigenschaft gepflegt
BankAccount.prototype.withdraw = function(amount) {
    if (this.getBalance() - amount < 0) {
        console.log("FEHLER!");
    } else {
        this._withdraws.push(amount);
    }
};

BankAccount.prototype.getBalance = function() {
    let balance = this._initialBalance;
        for(let withdraw of this._withdraws) {
            balance = balance - withdraw;
        }
        return balance;
};

/*class BankAccount {

    constructor(balance) {
        this._initialBalance = balance;
        this._withdraws = [];
    }

    withdraw(amount) {
        if (this.getBalance() - amount < 0) {
            console.log("FEHLER!");
        } else {
            this._withdraws.push(amount);
        }
    }

    getBalance() {
        let balance = this._initialBalance;
        for(let withdraw of this._withdraws) {
            balance = balance - withdraw;
        }
        return balance;
    }
}*/

let b = new BankAccount(1100);
b.withdraw(200);
b.withdraw(900);
console.log(b.getBalance());