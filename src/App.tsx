import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import History from "./pages/History";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
