// testing GIT changes 
// Na přihlaš se na  webu  https://automation.cervik.repl.co/inputs.html
// Heslo je v HTML, musi se dostat 
// 1) přihlasit se spravnym heslem
// 2) se špatným heslem 
// 3) s prázdým heslem



*/
let helpPage = require('../homework/homework3.page')


describe('Secret number', () => {
  beforeEach(() => { 
    browser.url('https://automation.cervik.repl.co/inputs.html')
  })

  it('confirmation appears after validating correct secret number', () => {
   
    let Heslo = $('#secretPassword') // natsevni proměné, kde má najít heslo
    let dostanHeslo = Heslo.getValue() // proměná pro dostání hesla 
    let input = $('#secretNumberInput') // proměná, kam se má napsat heslo 
    
    input.setValue(dostanHeslo) // napiš sem heslo, které si našel v HTML 
    helpPage.CheckNumber.click() // kliknutí na potvrzení 
    expect(helpPage.helpBlock).toHaveText('Super secret je super správně.') // ověření, že je to správné 
  });

  it('error appears after validating wrong secret number', () => {
    let blbeHeslo = $('#secretNumberInput') // proměná kam napsat heslo 
    
    blbeHeslo.setValue('140') // napiš heslo 140
    helpPage.CheckNumber.click() // kliknutí na potvrzení 
    expect(helpPage.helpBlock).toHaveText('Super secret je super špatně.') // ověření, že je to správné 
  });

  it('error appears after validating empty secret number', () => {
    
    helpPage.CheckNumber.click() // kliknutí na potvrzení 
    expect(helpPage.helpBlock).toHaveText('Super secret je super špatně.') // ověření, že je to správné
  });
})
