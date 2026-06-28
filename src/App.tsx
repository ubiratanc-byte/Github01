import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Componente para rastrear mudanças de rota
const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};

const PVVitaFlux = lazy(() => import("./pages/PVVitaFlux"));
const PVExport = lazy(() => import("./pages/PVExport"));
const VslOferta = lazy(() => import("./pages/VslOferta"));
const GHDdU8LIZI5waXBDJPbTzw = lazy(() => import("./pages/GHDdU8LIZI5waXBDJPbTzw"));
const Artigo = lazy(() => import("./pages/Artigo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* O Pixel fica aqui, dentro do Router mas fora das Routes */}
        <FacebookPixel /> 
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<PVVitaFlux />} />
            <Route path="/pv-export" element={<PVExport />} />
            <Route path="/vsl-oferta" element={<VslOferta />} />
            <Route path="/gosma" element={<GHDdU8LIZI5waXBDJPbTzw />} />
            <Route path="/artigo" element={<Artigo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
