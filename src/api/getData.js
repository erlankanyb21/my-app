import { requester } from "../requester";



export const getData = async () => {
    try {
        const { data } = await requester.get('/students/list/')
        return data
    } catch (error) {
        console.log(error);
    }
}