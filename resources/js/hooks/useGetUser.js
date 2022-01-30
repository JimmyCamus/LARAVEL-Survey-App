
const useGetUser = async (setUser) => {
  const response = await fetch("/api/getuser");
  const data = await response.json();
  setUser({name: data.data.name, email: data.data.email});
};

export default useGetUser;
