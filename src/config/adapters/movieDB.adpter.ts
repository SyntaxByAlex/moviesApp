import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFecher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1d464484284eace16d39ffbaf61f90b4',
        language: 'es'
    }
})