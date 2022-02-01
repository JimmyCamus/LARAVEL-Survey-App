import { useState, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Survey = ({ user }) => {
  const [questions, setQuestion] = useState([]);
  const [survey, setSurvey] = useState({});
  const match = useMatch("/survey/:id");
  const navigate = useNavigate();

  useEffect(async () => {
    const form = new FormData();
    form.append("id", match.params.id);
    const response = await fetch("/api/getSurvey", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    console.log(data);
    setQuestion(data.questions);
    setSurvey(data.survey);
  }, [match]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answerArray = [];
    const form = new FormData();
    form.append("survey_id", survey.id);

    Array.from(e.target.elements).forEach((element) => {
      if (!element.name) {
        return;
      }
      if ((element, element.checked)) {
        answerArray.push(
          JSON.stringify(`id:${element.name}-value:${element.value}:`)
        );
      }
    });

    if (answerArray.length < questions.length) {
      return;
    }
    form.append("questions", answerArray);

    const response = await fetch("/api/sendSurvey", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.status == "success") {
      navigate("/");
      return;
    }
  };

  return (
    <div>
      {survey.answered ? (
        <Typography variant="h4">
          You have already answer this survey
        </Typography>
      ) : (
        <div>
          <Typography variant="h4">{survey.title}</Typography>
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div key={question.id} style={{ margin: "15px 0px" }}>
                <Card sx={{ background: "#fafafa" }}>
                  <CardContent>
                    <Typography variant="h6">{question.title}</Typography>
                    <RadioGroup name={question.id.toString()} required={true}>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label={question.answer_1}
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label={question.answer_2}
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label={question.answer_3}
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label={question.answer_4}
                      />
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>
            ))}
            <Button type="submit" variant="contained">
              Send survey
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Survey;
