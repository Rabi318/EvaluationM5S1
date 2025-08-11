import {
  IBooking,
  IInvoice,
  IItinerary,
} from "../productInterfaces/productInterfaces";

class FlightBooking implements IBooking {
  book(): string {
    return "Flight booked with Indigo";
  }
}

class FlightItinerary implements IItinerary {
  display(): string {
    return "Displaing flight itinerary ...";
  }
}

class FlightInvoice implements IInvoice {
  generate(): string {
    return "Generating flight invoice...";
  }
}

export { FlightBooking, FlightItinerary, FlightInvoice };
