import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './header';
import MainFooter from './footer';
import HomePage from './templates/home';
import AboutPage from './templates/about';
import ContactPage from './templates/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
