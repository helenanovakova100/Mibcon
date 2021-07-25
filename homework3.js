/* ZADANI:
  Doplň všechny testcasy
  přidej kroky 
  přidej assertion (expect)
*/

/*
HINT: Secret password je schovane v HTML (nedaleko inputu pro secret heslo)
  Je potreba ho najit a precist. Nevadi, ze neni zobrazene - data tam jsou.
  Cislo se generuje kazdym nactenim stranky, nestaci si jej jednou precist a 
    a pak ho pouzivat celou dobu. 
  Hlasky maji dva stavy - 1) heslo je spravne, 2) heslo je spatne.
  Good luck! 
*/
let helpPage = require('../homework/homework3.page')


describe('Secret number', () => {
  beforeEach(() => { 
    browser.url('https://automation.cervik.repl.co/inputs.html')
  })

  it('confirmation appears after validating correct secret number', () => {
   
    let Heslo = $('#secretPassword')
    let dostanHeslo = Heslo.getValue()
    let input = $('#secretNumberInput')
    input.setValue(dostanHeslo)
    helpPage.CheckNumber.click()
    expect(helpPage.helpBlock).toHaveText('Super secret je super správně.')
  });

  it('error appears after validating wrong secret number', () => {
   
    let blbeHeslo = $('#secretNumberInput')
    blbeHeslo.setValue('140')
    helpPage.CheckNumber.click()
    expect(helpPage.helpBlock).toHaveText('Super secret je super špatně.')
  });

  it('error appears after validating empty secret number', () => {
    helpPage.CheckNumber.click()
    expect(helpPage.helpBlock).toHaveText('Super secret je super špatně.')
  });
})