import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainHeader from './header';
import MainFooter from './footer';
import Datapage from './templates/datapage';
import HomePage from './templates/home';
import AboutPage from './templates/about';
import ContactPage from './templates/contact';
import No_page_temp from './templates/404';
import './App.css';
import SignInPage from "./templates/sign-in";
import SignUpPage from "./templates/sign-up";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route index path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data" element={<Datapage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<No_page_temp />} />
      </Routes>
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
