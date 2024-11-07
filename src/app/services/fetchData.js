import { http } from '../services/http'


export async function getBooks() {
    try {
        const response = await http.get('/books');
        const data = response.data;
        // console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
