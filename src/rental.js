var Rental = function () { };

Rental.prototype.statement = function (customer) {

  var movies = {
    F001: { title: 'Ran', code: 'regular' },
    F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
    F003: { title: 'Cars 2', code: 'childrens' },
    F004: { title: 'Latest Hit Release', code: 'new' },
    //EXERCISE NOTE: add more movies if you need
  };

  let amountOwed = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let amountAdded = 0;

    // determine amount for each movie
    if(movie.code === 'regular') {
        amountAdded = 2;
        if (r.days > 2) {
          amountAdded += (r.days - 2) * 1.5;
        }
    }
    if(movie.code === 'new') {
        amountAdded = r.days * 3;
        if (r.days > 2)
            frequentRenterPoints++;
    }
    if(movie.code === 'childrens') {
        amountAdded = 1.5;
        if (r.days > 3) {
          amountAdded += (r.days - 3) * 1.5;
        }
    }

    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    // if (movie.code === 'new' && r.days > 2)
    //     frequentRenterPoints++;

    //print figures for this rental
    result += `\t${movie.title}\t${amountAdded}\n`;
    amountOwed += amountAdded;
  }
  // add footer lines
  result += `Amount owed is ${amountOwed}\n You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};
