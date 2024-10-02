//FICHEIRO TESTE QUE CHAMA O CONTEÚDO DO OUTRO E LEVA O NECESSÁRIO PARA O TESTAR
const soma = require('../pages/soma.js')

//MENSAGEM
test('A soma do 5 com 5 deverá dar 10', () => {

    //RESULTADO ESPERADO
  expect(soma(5, 5)).toBe(10);
});