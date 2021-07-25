
// Do vyhledavče Google napiš Mibcon a zkontroluj, že si na stránce Mibcon

describe('Najdi na Google Mibcon', () => {
    
    it ('napiš Mibcon do hledací řádky', () => {
        browser.url("https://www.google.com/");//otevre Google
        $('button#L2AGLb').click() // odsouhlasi podminky Google
        browser.maximizeWindow()
        $('.gLFyf.gsfi').click()//Najde radek pro vyhledavani
        $('.gLFyf.gsfi').setValue('Mibcon') // napise do radku Mibcon
        $('.gNO89b').click() // klikne na Hledat button
        $('a[href="https://www.mibcon.cz/"').click() // vybere web Mibcon
        expect($('#main-menu')).toHaveElementClass('navbar-collapse') // overi ze je na strankach Mibcon
      })
    })