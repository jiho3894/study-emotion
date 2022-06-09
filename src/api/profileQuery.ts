import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { instance } from "../servers/axios";

export interface Profile {
  data: {
    name: string;
    image: string;
    birth: string;
    mbti: string;
    introduce: string;
  };
}

export const GetProfile = () => {
  return useQuery<Profile, AxiosError, void>(
    "getProfile",
    () => {
      return instance.get("/profile");
    },
    {
      select: (data) => {
        return data.data;
      },
    }
  );
};
