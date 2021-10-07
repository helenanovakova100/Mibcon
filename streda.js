
// Napiš test, který na stránce IDOS ověří, že lze najít vlakové spojení z Prahy do Olomouce. Elementy, se kterými budeš pracovat, vyhledej co nejlépe udržovatelnými lokátory. 
// Zdrojový text testu vykopíruj do odpovědi. 

const idos = require ('../test/streda.page')
describe('Test that we can find connection from Prague To Olomouc', () => {
 
    it('Sets Values Praha and Olomouc an confirm it', () => {
        let departure = 'Praha'
        let arrival = 'Olomouc'

        browser.url('https://idos.idnes.cz/vlakyautobusymhdvse/spojeni/');
        $('#didomi-notice-agree-button').click() // click on accept cookies 
        browser.maximizeWindow()
        $('#timetablesModalLink').click()// choose transporation option 
        $('a[href="/vlaky/spojeni/"]').scrollIntoView()
        $('a[href="/vlaky/spojeni/"]').click() // chooses train as a connection
        $(idos.departureValue).setValue(departure) //set value of departure 
        $(idos.arrivalValue).setValue(arrival) // set value of arrival  
        $('.submit .btn').click() // click on search button 
        expect($('p*=Praha')).toHaveTextContaining('Praha') // connection details contains Prague
        expect($('p*=Olomouc')).toHaveTextContaining('Olomouc') // connection details contains Olomouc  
    });
});