import { useEffect, useState } from "react";
import { axios } from "../utils/axiosPublic";

function useUser() {
  const [user, setUser] = useState();
  const fetchUser = async () => {
    axios
      .get("/api/accounts/info/")
      .then((res) => {
        setUser(res?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return user;
}

export default useUser;
