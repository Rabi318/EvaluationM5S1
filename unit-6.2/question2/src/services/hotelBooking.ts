import {
  IBooking,
  IInvoice,
  IItinerary,
} from "../productInterfaces/productInterfaces";

class HotelBooking implements IBooking {
  book(): string {
    return "Hotel booked at Marriott";
  }
}

class HotelItinerary implements IItinerary {
  display(): string {
    return "Displaying hotel itinerary ...";
  }
}

class HotelInvoice implements IInvoice {
  generate(): string {
    return "Generating hotel invoice...";
  }
}

export { HotelBooking, HotelItinerary, HotelInvoice };
