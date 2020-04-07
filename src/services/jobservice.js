import axios from "axios";
import { apiUrl } from '../config.json';


export const getJobs = (searchString) => {
    const apiEndPoint = `${apiUrl}/jobs${searchString ? `?search=${searchString}` : ""}`;
    return axios.get(apiEndPoint);
}
