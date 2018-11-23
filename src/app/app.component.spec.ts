import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgxCurrencyModule } from 'ngx-currency';

describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            AppComponent
        ],
        imports: [
          BrowserModule,
          FormsModule,
          ReactiveFormsModule,
          NgxCurrencyModule
        ]
        }).compileComponents();
    }));

    it('Deve criar o app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`Modo padrão deve ser 'arredondado'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.modo).toEqual('arredondado');
    }));

    it('Deve renderizar os campos "texts" para inserção de dados', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#valor') && compiled.querySelector('#numeroParcelas')).toBeTruthy();
    }));

    it("Teste de cálculo de parcelas arredondadas", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.calcularParcelasArredondado(1530.26, 3)).toEqual([
            { parcela: 1, valor: 510.26 },
            { parcela: 2, valor: 510 },
            { parcela: 3, valor: 510 }
        ]);
    }));

    it("Teste de cálculo de parcelas diluídas", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.calcularParcelasDiluido(1530.26, 3)).toEqual([
            { parcela: 1, valor: 510.08666666666664 },
            { parcela: 2, valor: 510.08666666666664 },
            { parcela: 3, valor: 510.08666666666664 }
        ]);
    }));

});
