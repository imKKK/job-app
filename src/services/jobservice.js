import axios from "axios";
import { apiUrl } from '../config.json';


export const getJobs = () => {
    const apiEndPoint = `${apiUrl}/jobs`;
    return axios.get(apiEndPoint);
}
