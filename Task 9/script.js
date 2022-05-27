/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title
        this.director = director
        this.budget = budget
    }
    wasExpensive() {
        if(this.budget > 100000000) {
            console.log(`Movie "${this.title}" directed by ${this.director} exceeded budget of 100 mln. USD`)
        } else {
            console.log(`Movie "${this.title}" directed by ${this.director} did not exceed budget of 100 mln. USD`)
        }
    } 
}

const newMovie = new Movie ("The Silence Of THe Lambs", "Jonathan Demme", 19000000)
newMovie.wasExpensive()

const anothernewMovie = new Movie ("Pirates of the Caribbean: At World's End", "Gore Verbinski", 336000000 )
anothernewMovie.wasExpensive()