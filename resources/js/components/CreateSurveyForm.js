import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import TitleIcon from "@mui/icons-material/Title";
import AddQuestionForm from "./AddQuestionsForm";
import QuestionsList from "./QuestionsList";
import { createSurveyInput } from "../styles/styles";

let counter = 0;

const CreateSurveyForm = ({ user }) => {
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const questionData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) {
        return;
      }
      questionData[field.name] = field.value;
    });
    questionData["id"] = counter;
    counter++;
    setQuestions([...questions, questionData]);
  };

  const handleRemoveQuestion = (id) => {
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
  };

  const handleAddSurvey = async () => {
    const questionsData = new FormData();
    questionsData.append("title", title);
    const questionArray = [];
    questions.forEach((question) => {
      questionArray.push(
        question.question,
        question.answer_1,
        question.answer_2,
        question.answer_3,
        question.answer_4
      );
    });
    questionsData.append("questions", questionArray);

    const response = await fetch("/api/createSurvey", {
      method: "POST",
      body: questionsData,
    });

    const data = await response.json();

    if (data.status == "success") {
      navigate("/");
      return;
    }
    setAlert(data.status);
  };

  if (user.name === "") {
    navigate("/login");
    return;
  }

  return (
    <div>
      <div style={{ minWidth: "50vw" }}>
        {alert == "failed" ? (
          <Alert severity="error">
            Unexpected error, please try again later.
          </Alert>
        ) : null}
        <InputLabel
          htmlFor="input-with-icon-adornment"
          style={{ marginTop: "25px" }}
        >
          Survey name
        </InputLabel>
        <Input
          name="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
          required
          style={createSurveyInput}
          startAdornment={
            <InputAdornment position="start">
              <TitleIcon />
            </InputAdornment>
          }
        />
      </div>
      <AddQuestionForm handleAddQuestion={handleAddQuestion} />
      <QuestionsList
        questions={questions}
        handleRemoveQuestion={handleRemoveQuestion}
      />
      {questions.length > 0 ? (
        <Button variant="outlined" onClick={handleAddSurvey}>
          Create survey
        </Button>
      ) : null}
    </div>
  );
};

export default CreateSurveyForm;
