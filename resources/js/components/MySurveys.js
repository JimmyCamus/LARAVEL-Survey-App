import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SurveyCard from "./SurveyCard";

const MySurveys = ({ user }) => {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await fetch("/api/getSurveys");
    const data = await response.json();
    setSurveys(data.surveys);
  }, []);

  if (user.name === "") {
    navigate("/login");
    return null;
  }

  return (
    <div>
      {surveys.map((survey, index) => (
        <div key={index}>
          <SurveyCard survey={survey} href={`/statistics/${survey.id}`} />
        </div>
      ))}
    </div>
  );
};

export default MySurveys;
