# WAD-Opdracht
Een React app waarmee je je favorieten recepten op kunt slaan in een 'Recepten Boek'. Per boek kun je bepalen wie het boek kan inzien, en wie het boek kan bewerken.

## Week 1
.foreach werkt niet als loop, maar .map wel op eenzelfde soort manier. Verder kun je toch een array meegeven als prop als je dit zonder aanhalingstekens doet maar met {} erom.

## Week 2
Ik heb eerst geprobeert om te werken met een submit button op een form, maar dat lukte nog niet zo snel, dus nu heb ik een form met allemaal elementjes met aparte onChange eventhandlers. De state wordt aangepast als de app actief is, maar als je deze afsluit en weer opnieuw opstart staat de oude data er weer, er wordt dus nog nergens iets definitief aangepast.

Daarnaast heb ik proberen te werken met een array van recepten binnen de state, maar ik ben er nog niet achter hoe ik dan aan de hand van index of id een specifiek recept zou kunnen aanpassen, daarom het ik nu een state met de gegevens van 1 recept.

## Week 3
Basis CRUD gaat goed, bij het formulier om een recept toevoegen (AddRecipe) heb ik buttons om extra inputs toe te voegen voor ingredienten en stappen van het recept, dit lukt binnen het formulier zelf, maar de functie onChange lijkt bij deze extra toegevoegde elementen niet te werken.

## Week 4
Alles is goed gegaan denk ik, ik kan nu ook extra ingredienten en stappen toevoegen, het enige waar ik nog een keer voor moet gaan zitten in de vakantie is de opmaak..

## Week 5 (week 1 na de vakantie)
Ik was bijna vergeten om een computed variable te gebruiken, maar dat heb ik er toch nog in kunnen stoppen. Verder werkt alles denk ik zoals het hoort. Ik vraag me van 'data' nog wel af of deze in de store thuishoort, maar de app werkte niet zoals het moest toen dit element nog niet in de store stond, dus vandaar dat hij daar staat. Ik heb geprobeert om deze week een delete knop toe te voegen aan de ingredients en steps op de pagina's waar je een recept aanmaakt of edit, dit is deels gelukt alleen werd het recept in de store wel het goede ingredient eruit gehaald, maar op de edit pagina werd steeds de laatste input weggehaald. Kortom als ik uit het rijtje 'zwaan, gans, merel' de gans wilde deleten, zag ik op de edit pagina staan 'zwaan, gans' terwijl in de store er wel degelijk alleen nog 'zwaan, merel' bij de ingredienten stond. Ik ga vandeweek nog eens kijken naar de oplossing van de oefening uit de les vorige week om te zien of ik die oplossing hier eventueel kan toepassen.

## Week 6
De server opzetten en gebruiken is gelukt volgens mij, tevens is als het goed is nu ook het renderen van de pagina bij updaten van de store (recipes) opgelost (ook zonder naar een nieuwe pagina te gaan).

Ik heb de addRecipe pagina nu terug laten gaan naar het overzicht, omdat hij, doordat er met een asynchone promise wordt gewerkt in de add functie, op dit moment de vorige id (returnId) meekrijgt in plaats van de id van het net toegevoegde recept.

Verder moest ik om alles werkend te krijgen met de server het overzicht op "localhost:3000/recipes" in plaats van "localhost:3000/" zetten, dus als je nu yarn start uitvoert kom je op de 'er is iets misgegaan' pagina.

## Week 7
Op zich is het implementeren van Grahpql en Apollo Server aardig gelukt,alleen omdat ik update en delete nog steeds op de oude manier wordt het overzicht niet geupdate zoals hij dat wel doet als ik een recept toevoeg.

Een ander probleem is dat ik nu weer geen extra ingredienten kan toevoegen bij het aanmaken van een recept.

Ik heb helaas niet genoeg tijd gehad deze week om deze dingen uit te zoeken. Ook had ik graag alles (ook update en delete) met Graphql gedaan, alleen kwam ik in de problemen met het combineren van een query en een mutation, waarvoor ik wederom niet de tijd had deze week om het rustig uit te zoeken, helaas.

Ik zal vanmiddag ook een issue openen met de vragen die ik heb.

## Week 8
Ik heb de ingredienten en stappen uit het recept gehaald, zodat ik alles om kon zetten naar graphql. Dit maakt de app wel meer een recept referentieboek dan een receptenboek. Ik heb nog niet echt duidelijk voor ogen hoe je REST en graphql goed kunt laten samenwerken, maar dat is misschien een leuke oefening voor de zomervakantie.

Ik had in eerste instantie uitgewerkt dat je een recept alleen kan aanpassen als jij degene bent die hem heeft toegevoegd (zie de op een na laatste versie op github), alleen omdat ik uit getCurrentUser 'id' weg moest halen om het inloggen/uitloggen goed te laten werken, kan ik deze check niet meer maken. Checken op naam lijkt me niet zo'n goed idee, aangezien twee users dezelfde naam zouden kunnen hebben. Dus ik denk dat ik het nu zo ga programmeren dat je alleen als je ingelogd bent een recept kunt updaten/deleten en dat het niet uitmaakt (voor nu) wie je bent.
