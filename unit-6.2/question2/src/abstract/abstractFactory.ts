import {
  IBooking,
  IItinerary,
  IInvoice,
} from "../productInterfaces/productInterfaces";

interface IBookingProviderFactory {
  createBooking(): IBooking;
  createItinerary(): IItinerary;
  createInvoice(): IInvoice;
}

export { IBookingProviderFactory };
