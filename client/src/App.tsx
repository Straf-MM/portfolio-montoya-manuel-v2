import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import BtsSio from "./pages/BtsSio";
import Stages from "./pages/Stages";
import Stage1 from "./pages/Stage1";
import Stage2 from "./pages/Stage2";
import TechWatch from "./pages/TechWatch";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/bts-sio"} component={BtsSio} />
      <Route path={"/stages"} component={Stages} />
      <Route path={"/stage/1"} component={Stage1} />
      <Route path={"/stage/2"} component={Stage2} />
      <Route path={"/veille"} component={TechWatch} />
      <Route path={"/competences"} component={Competences} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
