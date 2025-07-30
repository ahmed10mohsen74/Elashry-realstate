import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SearchResults from "./pages/SearchResults";
import HotelDetails from "./pages/HotelDetails";
import CarBooking from "./pages/CarBooking";
import Payment from "./pages/Payment";
import BookingConfirmation from "./pages/BookingConfirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllCars from "./pages/AllCars";
import AllHotels from "./pages/AllHotels";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/car-booking/:id" element={<CarBooking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cars" element={<AllCars />} />
          <Route path="/hotels" element={<AllHotels />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
