import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, AboutPage } from './';

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="about" element={ <AboutPage/> } />
        <Route path="login" element={ <LoginPage/> } />
      </Routes>
    </>
  );
};
