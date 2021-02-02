import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

const OnResponseSuccess = (response: AxiosResponse<any>): AxiosResponse<any> =>
    response;

const OnResponseFailure = (error: any): Promise<any> => {
    const errors = error?.response?.data?.errors;

    console.error(errors);

    return Promise.reject(errors);
};

const instance: Readonly<AxiosInstance> = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 5000
});

instance.defaults.headers.get.Accepts = "application/json";
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

instance.interceptors.response.use(OnResponseSuccess, OnResponseFailure);

export default instance;
