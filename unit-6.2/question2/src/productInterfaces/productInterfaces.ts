interface IBooking {
  book(): string;
}

interface IItinerary {
  display(): string;
}

interface IInvoice {
  generate(): string;
}

export { IBooking, IItinerary, IInvoice };
