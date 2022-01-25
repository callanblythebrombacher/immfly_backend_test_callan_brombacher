import axios from "axios";

export const apiGet = async (start:string, end:string) => {
    const response = await axios.get("http://localhost:8080/append", {params:{
        start: start,
        end: end
    },
        headers: {'Content-Type': 'text/plain; charset=utf8'}}
    )
    return JSON.stringify(response.data)
}