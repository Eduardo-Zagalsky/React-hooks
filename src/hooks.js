import { useState } from "react";
import axios from "axios";
const useFlip = () => {
    const [flip, setFlip] = useState(true);
    const flipState = () => {
        setFlip(flip => !flip);
    }
    return [flip, flipState];
}

function useAxios(baseUrl) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (restOfUrl = "") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, response.data]);
    };

    return [responses, addResponseData];
}
export { useFlip, useAxios };