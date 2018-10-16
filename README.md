## Parc.APP
Uma simples aplicação focada em calcular parcelas em dois modos distintos:
- __Modo diluído__ divide o valor pelo número de parcelas empartes iguais.
- **Modo arredondado** verifica se o valor é divisível pelo número de parcelas e se o valor da percela contém centavos, se sim, retira os centavos dos valores das parcelas e insere a difenrença na primeira parcela.

### "But why?"
Um dia, conversando com minha mulher sobre o seu dia a dia no trabalho, ela começa me contar das dores em uma de suas tarefas diárias, calcular parcelas seguindo uma lógica interna. Ao ver a tão sonhada (para um desenvolvedor) situação de tarefas repetitivas não consegui deixar passar, e no dia seguinte desenvolvi e publiquei todo o Parc.APP em torno de 3 ~ 4 horas.

### Como foi feito
O Parc.APP feito concebido orgulhosamente usando Angular, mais especificamente a versão 6 do framework, SASS para estilização e seu código está versionado no Github (https://github.com/ggentil/Parc.APP). 

### Automação de Build & Deploy
No Parc.APP foi implementado a técnica de automação de processo de build e deploy, utilizei o Netlify para tal feito, configurando o mesmo 