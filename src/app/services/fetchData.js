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

export async function updateTabColor(id, color) {
    try {
        await http.patch(`/tabs/${id}`, {color});
        //console.log( response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }

}

export async function updateTabText(id, text) {
    try {
        await http.patch(`/tabs/${id}`, {text});
        //console.log( response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }

}

export async function deleteTab(id) {
    try {
        await http.delete(`/tabs/${id}`);
        //console.log( response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

export async function postTab() {
    try {
        let text = 'Enter text';
        let color = '#eaea73'
        await http.post('/tabs',{text,color});
        //console.log( response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}