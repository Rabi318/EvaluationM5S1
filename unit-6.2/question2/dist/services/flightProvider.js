"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightProviderFactory = void 0;
const flightBooking_1 = require("./flightBooking");
class FlightProviderFactory {
    createBooking() {
        return new flightBooking_1.FlightBooking();
    }
    createItinerary() {
        return new flightBooking_1.FlightItinerary();
    }
    createInvoice() {
        return new flightBooking_1.FlightInvoice();
    }
}
exports.FlightProviderFactory = FlightProviderFactory;
