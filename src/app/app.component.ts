import { Component } from '@angular/core';

enum modos {
    arredondado = "arredondado",
    diluido = "diluido"
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    valor: number;
    numeroParcelas: number;
    parcelas: Object[] = [];
    modo: string = modos.arredondado;
    formatoReal: Object = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

    constructor() {}

    calcularParcelas() {
        this.modo == modos.arredondado ? 
            this.calcularParcelasArredondado() : 
            this.calcularParcelasDiluido(); 
    };

    calcularParcelasArredondado() {
        this.parcelas = [];
        
        let valorInteiro = Math.floor(this.valor);
        while (valorInteiro % this.numeroParcelas != 0) valorInteiro--;
        
        let diferenca = (this.valor - valorInteiro),
            parcela = valorInteiro / this.numeroParcelas;
        
        for (let index = 1; index <= this.numeroParcelas; index++) {
            this.parcelas.push({
                parcela: index,
                valor: index == 1 ? parcela + diferenca : parcela
            });
        };
    };

    calcularParcelasDiluido() {
        this.parcelas = [];
        
        let parcela = this.valor / this.numeroParcelas;
        for (let index = 1; index <= this.numeroParcelas; index++) {
            this.parcelas.push({
                parcela: index,
                valor: parcela
            });
        };
    }
}
