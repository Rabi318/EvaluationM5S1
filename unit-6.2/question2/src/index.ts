import { IBookingProviderFactory } from "./abstract/abstractFactory";
import { FlightProviderFactory } from "./services/flightProvider";
import { HotelProviderFactory } from "./services/hotelProvider";

function simulateBooking(factory: IBookingProviderFactory) {
  const booking = factory.createBooking();
  const itinerary = factory.createItinerary();
  const invoice = factory.createInvoice();

  console.log(booking.book());
  console.log(itinerary.display());
  console.log(invoice.generate());
}

console.log("----Flight Booking----");
simulateBooking(new FlightProviderFactory());

console.log("----Hotel Booking----");
simulateBooking(new HotelProviderFactory());
