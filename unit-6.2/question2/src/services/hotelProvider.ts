import { IBookingProviderFactory } from "../abstract/abstractFactory";
import { HotelBooking, HotelInvoice, HotelItinerary } from "./hotelBooking";

class HotelProviderFactory implements IBookingProviderFactory {
  createBooking() {
    return new HotelBooking();
  }

  createItinerary() {
    return new HotelItinerary();
  }

  createInvoice() {
    return new HotelInvoice();
  }
}

export { HotelProviderFactory };
