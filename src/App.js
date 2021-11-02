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

var reducer = (state, action) => {
  switch (action.type) {
    case 'both':
      return {name: 'Paa', age: 29}
    case 'any':
      return {age: 27}
  }
};
var [state, dispatch] = useReducer(reducer, {name: 'Prince', age: 28})