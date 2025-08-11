import { IBookingProviderFactory } from "../abstract/abstractFactory";
import { FlightBooking, FlightInvoice, FlightItinerary } from "./flightBooking";

class FlightProviderFactory implements IBookingProviderFactory {
  createBooking() {
    return new FlightBooking();
  }

  createItinerary() {
    return new FlightItinerary();
  }

  createInvoice() {
    return new FlightInvoice();
  }
}

export { FlightProviderFactory };
