import { useState, useEffect } from "react";
import AppRouter from "./services/AppRouter";
import useGetUser from "./hooks/useGetUser";

const Index = () => {
  const [user, setUser] = useState({});
  const getUser = useGetUser;
  useEffect(async () => {
    await getUser(setUser);
  },[]);
  return <AppRouter user={user} setUser={setUser} />;
};

export default Index;
