import apiClient from "../../http/apiClient";
import { useQuery } from "react-query";

export const useCitations = () => {
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const getCitations = async (appNumber: string) => {
    console.log("error", process.env);
    const { isLoading, isSuccess, data, error } = useQuery(
      ["citations", appNumber],
      async () => {
        const era = await apiClient.get(`/citations?applicationNumber=EP12345678${appNumber}`, {
          headers: {
            "API-KEY": "F8A503DB-61A8-40C4-BEC0-00337B5CE6A5",
          },
        });
        console.log("hook", era);
        return era;
      },
      {
        enabled: false,
        retry: 1,
        retryDelay: 1000,
        onSuccess: (res) => {
          console.log("hook", res);
          return {
            status: res.status,
            data: res.data,
          };
        },
        onError: (err: any) => {
          console.log("hook", err);
          fortmatResponse(err.response?.data || err);
        },
      }
    );

    return { isLoading, isSuccess, data, error };
  };
  return { getCitations };
};
