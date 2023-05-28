import { $authHost, $host } from "./index";

export const createArticle = async (article) => {
    try{
    const {data} = await $authHost.post('api/article', article)
    return data
    } catch(e){
        alert("К сожалению, статья не была добавлена. Попробуйте еще раз...")
    }
}

export const fetchArcticle= async (article) => {
    const {data} = await $host.get('api/article',article)
    return data
}

export const fetchOneArcticle= async (id) => {
    const {data} = await $host.get('api/article/' + id)
    return data
}

