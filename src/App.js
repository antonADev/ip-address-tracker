import { useEffect } from 'react';
import { Application } from './App.jsx';
import Background from './components/background/background.component';
import Header from './components/header/header.component';
import Input from './components/input/input.component.jsx';
import Info from './components/info-container/info-container.component.jsx';
import { fetchInitialData } from './store/ipDataSlice.js';
import { useDispatch } from 'react-redux';
import MainContainer from './components/main-container/main-container.component.jsx';

function App() {
  console.log(process.env.REACT_APP_IPIFY_API_KEY);
  //UNCOMMENT BEFORE PRODUCTION
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchInitialData());
  // }, []);
  return (
    <Application>
      <Background>
        <Header />
        <MainContainer>
          <Input />
          <Info />
        </MainContainer>
      </Background>
    </Application>
  );
}

export default App;
