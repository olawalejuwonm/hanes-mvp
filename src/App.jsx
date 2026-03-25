import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Layout";
import Home from "./pages/Home";
import WelshIcons from "./pages/WelshIcons";
import IconDetail from "./pages/IconDetail";
import Locations from "./pages/Locations";
import Timeline from "./pages/Timeline";
import QRCards from "./pages/QRCards";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/icons" element={<WelshIcons />} />
            <Route path="/icons/detail" element={<IconDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/qr-cards" element={<QRCards />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
