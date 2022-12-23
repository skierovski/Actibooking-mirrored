import jwtDecode from "jwt-decode";
import { Route, Routes } from "react-router-dom";
import FAQPage from "./Components/FAQPage/FAQPage";
import HomePage from "./Components/HomePage/HomePage";
import CookiesContext from "./Context/cookies-context";
import { CookiesProvider, useCookies } from "react-cookie";
import AccountPage from "./Components/Account/AccountPage";
import ListOfOrganizations from "./Components/Organization/ListOfOrganizations/ListOfOrganizations";
import SingleOrganizationPage from "../src/Components/Organization/SingleOrganizationPage/SingleOrganizationPage";
import EditOrganization from "./Components/EditOrganization/EditOrganization";

const App = () => {
  const [cookies, setCookies, removeCookie] = useCookies();

  const GetCookie = (cookieName) => {
    return cookies[cookieName];
  };

  const SetCookie = (
    cookieName,
    cookieValue,
    cookiePath = null,
    options = null
  ) => {
    setCookies(cookieName, cookieValue, { path: cookiePath }, options);
  };

  const RemoveCookie = (cookieName) => {
    removeCookie(cookieName);
  };

  const DecodeToken = (token) => {
    return jwtDecode(token);
  };

  return (
    <CookiesProvider>
      <CookiesContext.Provider
        value={{
          GetCookie,
          SetCookie,
          RemoveCookie,
          DecodeToken,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Organizations" element={<ListOfOrganizations />} />
          <Route
            path="/Organizations/:id"
            element={<SingleOrganizationPage />}
          />
          <Route path="/Edit/Organization/:id" element={<EditOrganization />} />
          <Route path="/Account/:id" element={<AccountPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
        </Routes>
      </CookiesContext.Provider>
    </CookiesProvider>
  );
};

export default App;
