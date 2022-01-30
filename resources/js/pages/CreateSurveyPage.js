import CreateSurveyForm from "../components/CreateSurveyForm";

const CreateSurveyPage = ({ user }) => {
  return (
    <div>
      <CreateSurveyForm user={user} />
    </div>
  );
};

export default CreateSurveyPage;
