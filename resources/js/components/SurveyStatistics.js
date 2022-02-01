import { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const SurveyStatistics = () => {
  const [survey, setSurvey] = useState({});
  const [questions, setQuestions] = useState([]);
  const [questionObject, setQuestionObjects] = useState([]);
  const match = useMatch("statistics/:id");

  useEffect(async () => {
    const form = new FormData();
    form.append("id", match.params.id);
    const response = await fetch("/api/getStatistics", {
      method: "POST",
      body: form,
    });
    const data = await response.json();

    setSurvey(data.survey);
    setQuestions(data.questions);
    setQuestionObjects(data.questionObject);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{survey.title}</h1>
      {questions.map((question, index) => (
        <div key={question.title}>
          {questionObject.length > 0 ? (
            <div>
              <TableContainer style={{ margin: "50px 0px" }}>
                <h3>{questionObject[index].title}</h3>
                <Table sx={{ width: "60vw" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Answer</TableCell>
                      <TableCell align="center">Amount of responses</TableCell>
                      <TableCell align="center">Percentage of total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{questionObject[index].answer_1}</TableCell>
                      <TableCell align="center">{question.answer_1}</TableCell>
                      <TableCell align="center">
                        {(question.answer_1 / question.total) * 100}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{questionObject[index].answer_2}</TableCell>
                      <TableCell align="center">{question.answer_2}</TableCell>
                      <TableCell align="center">
                        {(question.answer_2 / question.total) * 100}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{questionObject[index].answer_3}</TableCell>
                      <TableCell align="center">{question.answer_3}</TableCell>
                      <TableCell align="center">
                        {(question.answer_3 / question.total) * 100}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{questionObject[index].answer_4}</TableCell>
                      <TableCell align="center">{question.answer_4}</TableCell>
                      <TableCell align="center">
                        {(question.answer_4 / question.total) * 100}%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SurveyStatistics;
