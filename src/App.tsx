import React from 'react';
import './App.css';
import { IDataToDay, OilTable } from './components/OilTable';
import { useActions } from './hooks/useAction';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

function App() {
  const { app__initApp } = useActions();

  const oilData = useSelector((state: { data: { data: Array<IDataToDay> | null } }) => state.data);

  return (
    <div className="wrap">
      <Button label="Загрузить данные" severity="success" onClick={app__initApp} />
      {oilData.data ? <OilTable data={oilData.data} /> : <span>Данные отсутствуют, попробуйте загрузить.</span>}
    </div>
  );
}

export default App;
