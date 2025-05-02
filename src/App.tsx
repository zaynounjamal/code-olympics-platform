
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

// User Pages
import Home from "./pages/Home";
import LiveMatches from "./pages/LiveMatches";
import Games from "./pages/Games";
import GameDetail from "./pages/GameDetail";
import ChallengeDetail from "./pages/ChallengeDetail";
import Leaderboard from "./pages/Leaderboard";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import McqQuestions from "./pages/McqQuestions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/live" element={
            <Layout>
              <LiveMatches />
            </Layout>
          } />
          <Route path="/games" element={
            <Layout>
              <Games />
            </Layout>
          } />
          <Route path="/games/:gameId" element={
            <Layout>
              <GameDetail />
            </Layout>
          } />
          <Route path="/games/:gameId/:challengeId" element={
            <Layout>
              <ChallengeDetail />
            </Layout>
          } />
          <Route path="/mcq" element={
            <Layout>
              <McqQuestions />
            </Layout>
          } />
          <Route path="/leaderboard" element={
            <Layout>
              <Leaderboard />
            </Layout>
          } />
          <Route path="/faq" element={
            <Layout>
              <Faq />
            </Layout>
          } />
          
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
