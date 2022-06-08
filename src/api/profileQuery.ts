import axios from "axios";
import { useQuery } from "react-query";
import { instance } from "../servers/axios";

export interface Profile {
  name: string;
  image: string;
  birth: string;
  mbti: string;
  introduce: string;
}

export const GetProfile = () => {
  return useQuery("getProfile", () => {
    return instance.get("/profile");
  });
};
