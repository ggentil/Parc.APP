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

    it('deve renderizar os campos "texts" para inserção de dados', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#valor') && compiled.querySelector('#numeroParcelas')).toBeTruthy();
    }));

});
