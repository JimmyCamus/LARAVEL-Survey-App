import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const QuestionsList = ({ questions, handleRemoveQuestion }) => {
  return (
    <div>
      {questions.map((item, index) => (
        <div key={index}>
          <Card style={{ marginTop: "25px", marginBottom: "25px" }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.question}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                {"a)"} {item.answer_1}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                {"b)"} {item.answer_2}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                {"c)"} {item.answer_3}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                {"d)"} {item.answer_4}
              </Typography>
            </CardContent>
            <CardActions>
              <Button type="submit" size="small" color="error" onClick={() => handleRemoveQuestion(item.id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;
