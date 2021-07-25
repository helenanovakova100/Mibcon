let helpPage = {
    // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
    // ze to je jen element, ne funkce, ktera neco dela.
    // PRIKLAD - funkce, ktera vraci element
    get CheckNumber() { return $('#checkSecretNumber')},
    get helpBlock(){ return $ ('#passwordHelpBlock')}, 
  }
  
  module.exports = helpPage