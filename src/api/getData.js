import { requester } from "../requester";

export const getData = async () => {
    try {
        const { data } = await requester.get('/atelier/order/list')
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getWorks = async () => {
    try {
        const { data } = await requester.get('/atelier/works/list')
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getHome = async () => {
    try {
        const { data } = await requester.get('/atelier/home/')
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getAbout = async () => {
    try {
        const { data } = await requester.get('/atelier/about/list')
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getServices = async () => {
    try {
        const { data } = await requester.get('/atelier/services/')
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getContacts = async () => {
    try {
        const { data } = await requester.get('/atelier/contacts/list')
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getOrders = async () => {
    try {
        const { data } = await requester.get('/atelier/order/list')
        return data
    } catch (error) {
        console.log(error);
    }
}