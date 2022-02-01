import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey, href }) => {
  const handleDateFormat = (date) => {
    const dateAux = new Date(date);
    return `${dateAux.getDate()}-${
      dateAux.getMonth() + 1
    }-${dateAux.getFullYear()}`;
  };

  return (
    <div>
      <Link to={href}>
        <Button style={{margin: "15px 0px"}}>
          <Card
            sx={{
              minWidth: "50vw",
              diplay: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fafafa"
            }}
          >
            <CardContent>
              <Typography variant="h4" style={{ textAlign: "center",}}>
                {survey.title}
              </Typography>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                {handleDateFormat(survey.created_at)}
              </Typography>
            </CardContent>
          </Card>
        </Button>
      </Link>
    </div>
  );
};

export default SurveyCard;
