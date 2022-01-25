import axios from "axios";

export const apiGet = async (string) => {
    const response = await axios.get("http://localhost:8080/reverse/" +string)
    return response.data
}