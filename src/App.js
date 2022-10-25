import { Application } from './App.jsx';
import Background from './components/background/background.component';
import Header from './components/header/header.component';
import Input from './components/input/input.component.jsx';
function App() {
  return (
    <Application>
      <Background>
        <Header />
        <Input />
      </Background>
    </Application>
  );
}

export default App;
