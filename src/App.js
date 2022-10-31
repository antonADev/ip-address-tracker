import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Application } from './App.jsx';

import Background from './components/background/background.component';
import Header from './components/header/header.component';
import Input from './components/input/input.component.jsx';
import Info from './components/info-container/info-container.component.jsx';
import HeaderBackground from './components/header-background/header-background.component.jsx';
import MainBackgroundContainer from './components/main-container/main-container.component.jsx';
import AppContainer from './components/app-container/app-container.component.jsx';
import MapComponent from './components/map/map.component.jsx';

import { fetchInitialData } from './features/ipDataSlice.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);
  return (
    <Application>
      <Background>
        <HeaderBackground>
          <Header />
        </HeaderBackground>
        <MainBackgroundContainer>
          <AppContainer>
            <Input />
            <Info />
          </AppContainer>
          <MapComponent />
        </MainBackgroundContainer>
      </Background>
    </Application>
  );
}

export default App;
