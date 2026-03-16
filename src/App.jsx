import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <Router>
          <div className="flex justify-center bg-sand min-h-screen">
            <div className="w-full max-w-[450px] bg-white shadow-2xl min-h-screen relative overflow-x-hidden">
              <AppRoutes />
            </div>
          </div>
        </Router>
      </CartProvider>
    </DarkModeProvider>
  );
}

export default App;
