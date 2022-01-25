import axios from "axios";

export const apiGet = async (url, orderby, filter) => {
    const response = await axios.get("http://localhost:8080/" + url, {params:{
        order: orderby,
        filter: filter
    },
        headers: {'Content-Type': 'text/plain; charset=utf8'}}
    )
    return JSON.stringify(response.data)
}