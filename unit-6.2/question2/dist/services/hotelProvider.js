"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelProviderFactory = void 0;
const hotelBooking_1 = require("./hotelBooking");
class HotelProviderFactory {
    createBooking() {
        return new hotelBooking_1.HotelBooking();
    }
    createItinerary() {
        return new hotelBooking_1.HotelItinerary();
    }
    createInvoice() {
        return new hotelBooking_1.HotelInvoice();
    }
}
exports.HotelProviderFactory = HotelProviderFactory;
