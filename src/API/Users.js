import axios from "axios";

export const userList = () => {
  return axios.get("https://randomuser.me/api/?results=10&nat=US");
};
