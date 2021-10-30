import './App.css';
import OtherComponent from './OtherComponent.js'
import { NameProvider } from './NameContext.js'

function App() {
  return (
    <NameProvider>
      <OtherComponent />
    </NameProvider>
  );
}

export default App;
