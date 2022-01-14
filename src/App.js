import { useEffect, useState, useReducer } from 'react';
import { Spin } from 'antd';

import './App.css';
import { Home } from './pages/home';
import { fetchInfo } from './network';
import { initialState, reducers } from './store/reducers';
import { loadRefData } from './store/actions';
import { StoreContext } from './store/store-context';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducers, initialState);

  const fetchRefData = async () => {
    try {
      const { referenceData } = await fetchInfo();
      return loadRefData(referenceData, dispatch);
    } catch (e) {
      throw new Error('Error loading app data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRefData();
  }, []);

  if (isLoading) return <Spin />;

  return (
    <div className="App">
      <StoreContext.Provider value={{ storeState: state, storeDispatch: dispatch }}>
        <Home />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
