import React from 'react';
import { Boxdisplay } from '../Boxdisplay';
import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.app}>
      <Boxdisplay />
    </div>
  );
}
