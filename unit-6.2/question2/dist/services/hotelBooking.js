"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelInvoice = exports.HotelItinerary = exports.HotelBooking = void 0;
class HotelBooking {
    book() {
        return "Hotel booked at Marriott";
    }
}
exports.HotelBooking = HotelBooking;
class HotelItinerary {
    display() {
        return "Displaying hotel itinerary ...";
    }
}
exports.HotelItinerary = HotelItinerary;
class HotelInvoice {
    generate() {
        return "Generating hotel invoice...";
    }
}
exports.HotelInvoice = HotelInvoice;
