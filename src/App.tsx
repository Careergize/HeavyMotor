import { AppLayout } from './layouts/AppLayout';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <AppLayout>
      {({ onOpenBooking }) => <HomePage onOpenBooking={onOpenBooking} />}
    </AppLayout>
  );
}

export default App;
