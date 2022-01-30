import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { createSurveyInput } from "../styles/styles";

const AddQuestionForm = ({ handleAddQuestion }) => {
  return (
    <div>
      <form onSubmit={handleAddQuestion}>
        <Card style={{ marginTop: "25px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Write a question
            </Typography>
            <InputLabel
              htmlFor="input-with-icon-adornment"
              style={{ marginTop: "25px" }}
            >
              Question
            </InputLabel>
            <Input
              name="question"
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  <QuestionMarkIcon />
                </InputAdornment>
              }
              autoComplete="off"
              required
              style={createSurveyInput}
            />
            {["answer_1", "answer_2", "answer_3", "answer_4"].map(
              (item, index) => (
                <div key={index}>
                  <InputLabel
                    htmlFor="input-with-icon-adornment"
                    style={{ marginTop: "25px" }}
                  >
                    Answer {index + 1}
                  </InputLabel>
                  <Input
                    name={item}
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">
                        <QuestionAnswerIcon />
                      </InputAdornment>
                    }
                    autoComplete="off"
                    required
                    style={createSurveyInput}
                  />
                </div>
              )
            )}
          </CardContent>
          <CardActions>
            <Button type="submit" size="small">
              Add Question
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default AddQuestionForm;
