import AppRouter from "./routes/AppRouter";
import { Toaster } from "sonner";
import Footer from "./components/common/Footer";

function App() {
  return (
      <>
        <AppRouter />
        <Toaster
            position="top-right"
            richColors
            closeButton
        />
      </>
  );
}

export default App;