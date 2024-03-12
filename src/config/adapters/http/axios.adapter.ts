import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./hppt.adapter";


interface Options {
    baseUrl: string
    params: Record<string, string>
}
export class AxiosAdapter implements HttpAdapter {

    private axiosIntance: AxiosInstance;
    constructor(options: Options) {
        this.axiosIntance = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        })
    }

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            const { data } = await this.axiosIntance.get<T>(url, options)
            return data
        } catch (error) {
            throw new Error(`Error fetching ${url}`);
        }
    }

}