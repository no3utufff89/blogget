import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../Modal';
import IndexPage from './IndexPage';
import Page404 from './Page404';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path="/" element={<IndexPage/>} errorElement={<Page404/>}/>
        <Route path="/auth" element={<IndexPage/>}/>
        <Route path="/category/:page" element={<List/>}>
          <Route path="post/:id" element={<Modal/>}/>
        </Route>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Layout>
  </main>
);

