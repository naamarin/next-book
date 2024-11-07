import http from "@/services/http";

export async function getBooks() {
    try {
        const response = await http.get('/books');
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
