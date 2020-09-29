import React from 'react';
import { Boxdisplay } from '../Boxdisplay';
import { Title } from '../Title';
import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.app}>
      <Title title="Generator password" />
      <Boxdisplay />
    </div>
  );
}
