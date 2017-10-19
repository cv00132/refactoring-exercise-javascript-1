describe('Rental', function () {
  var rental = new Rental();

  var properResult =
    `Rental Record for martin\n
    Ran     3.5\n
    Trois Couleurs: Bleu    2\n
    Amount owed is 5.5\n
    You earned 2 frequent renter points\n`;

  it('should return the proper result', function () {
    properResult = properResult.replace(/\s+/g, '');

    var customer = {
      name: 'martin',
      rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 1 }]
    };

    var actualResult = rental.statement(customer).replace(/\s+/g, '');
    expect(actualResult).toEqual(properResult);
  });
});
