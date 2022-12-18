import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import SingleOrganizationPage from "../src/Components/Organization/SingleOrganizationPage/SingleOrganizationPage";
import ListOfOrganizations from "./Components/Organization/ListOfOrganizations/ListOfOrganizations";
import AccountPage from "./Components/Account/AccountPage/AccountPage";
import { CookiesProvider } from "react-cookie";
import FAQPage from "./Components/FAQPage/FAQPage";

const App = () => {
  return (
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Organizations" element={<ListOfOrganizations />} />
        <Route path="/Organizations/:id" element={<SingleOrganizationPage />} />
        <Route path="/Account/:id" element={<AccountPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
    </CookiesProvider>
  );
};

export default App;
