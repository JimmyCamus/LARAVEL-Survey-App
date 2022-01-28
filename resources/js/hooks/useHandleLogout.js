const useHandleLogout = async (setUser) => {
  const response = await fetch("/api/logout");
  const data = await response.json();

  console.log(data);

  setUser({ name: "", email: "" });
};

export default useHandleLogout;
