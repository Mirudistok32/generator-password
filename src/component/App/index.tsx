import React from 'react';
import { Boxdisplay } from '../Boxdisplay';
import { Footer } from '../Footer';
import { Title } from '../Title';
import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.app}>
      <div className={s.app__wrap}>
        <Title title="Generator password" />
        <Boxdisplay />
      </div>
      <Footer className={s.app__footer}/>
    </div>
  );
}
