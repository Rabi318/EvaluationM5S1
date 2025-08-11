"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightInvoice = exports.FlightItinerary = exports.FlightBooking = void 0;
class FlightBooking {
    book() {
        return "Flight booked with Indigo";
    }
}
exports.FlightBooking = FlightBooking;
class FlightItinerary {
    display() {
        return "Displaing flight itinerary ...";
    }
}
exports.FlightItinerary = FlightItinerary;
class FlightInvoice {
    generate() {
        return "Generating flight invoice...";
    }
}
exports.FlightInvoice = FlightInvoice;
