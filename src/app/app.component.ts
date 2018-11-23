import { Component } from '@angular/core';

enum modos {
    arredondado = "arredondado",
    diluido = "diluido"
};

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
        this.parcelas = this.modo == modos.arredondado ? 
                            this.calcularParcelasArredondado(this.valor, this.numeroParcelas) : 
                            this.calcularParcelasDiluido(this.valor, this.numeroParcelas); 
    };

    calcularParcelasArredondado(valor: number, numeroParcelas: number): Array<any> {
        let parcelas: Array<any> = [],
            valorInteiro: number = Math.floor(valor);

        while (valorInteiro % numeroParcelas != 0) 
            valorInteiro--;
        
        let diferenca: number = (valor - valorInteiro),
            parcela: number = valorInteiro / numeroParcelas;
        
        for (let index = 1; index <= numeroParcelas; index++) {
            parcelas.push({
                parcela: index,
                valor: index == 1 ? parcela + diferenca : parcela
            });
        };

        return parcelas;
    };

    calcularParcelasDiluido(valor: number, numeroParcelas: number): Array<any> {
        let parcelas: Array<any> = [],
            parcela: number = valor / numeroParcelas;

        for (let index: number = 1; index <= numeroParcelas; index++) {
            parcelas.push({
                parcela: index,
                valor: parcela
            });
        };

        return parcelas;
    }
};