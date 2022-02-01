import { useState, useEffect } from "react";
import SurveyCard from "./SurveyCard";

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(async () => {
    const response = await fetch("/api/getAllSurveys");
    const data = await response.json();
    setSurveys(data.surveys);
  }, [])

  return (
    <div>
      {surveys.map(survey => (
        <div key={survey.id} >
          <SurveyCard survey={survey} href={`survey/${survey.id}`} />
        </div>
      ))}
    </div>
  );
};

export default SurveyList;
