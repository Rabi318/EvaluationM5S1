"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flightProvider_1 = require("./services/flightProvider");
const hotelProvider_1 = require("./services/hotelProvider");
function simulateBooking(factory) {
    const booking = factory.createBooking();
    const itinerary = factory.createItinerary();
    const invoice = factory.createInvoice();
    console.log(booking.book());
    console.log(itinerary.display());
    console.log(invoice.generate());
}
console.log("Flight Booking");
simulateBooking(new flightProvider_1.FlightProviderFactory());
console.log("Hotel Booking");
simulateBooking(new hotelProvider_1.HotelProviderFactory());
