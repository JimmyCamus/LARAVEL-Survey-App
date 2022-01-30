import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateSurveyPage from "../pages/CreateSurveyPage";
import MySurveysPages from "../pages/MySurveysPage";

const AppRouter = ({ user, setUser }) => {
  return (
    <Layout user={user} setUser={setUser}>
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route path="login" element={<LoginPage setUser={setUser} />} />
        <Route path="register" element={<RegisterPage user={user} />} />
        <Route path="createSurvey" element={<CreateSurveyPage user={user} />} />
        <Route path="mySurveys" element={<MySurveysPages user={user} />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
