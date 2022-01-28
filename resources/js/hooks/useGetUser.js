
const useGetUser = async (setUser) => {
  const response = await fetch("/api/getuser");
  const data = await response.json();
  console.log(data.data);
  setUser({name: data.data.name, email: data.data.email});
};

export default useGetUser;
