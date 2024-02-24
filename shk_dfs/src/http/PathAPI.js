import {$host} from './index';

export const createPath = async(path) => {
    console.log("Path:  ", path)
    const {data} = await $host.post('/api/path/createPath', path[0])
    return data
}

export const fetchPath = async() => {
    const {data} = await $host.get('/api/path/getPath')
    return data
}

export const fetchSection = async() => {
    const {data} = await $host.get('/api/path/getSection')
    return data
}

export const fetchSpk = async(id) => {
    const {data} = await $host.get(`/api/path/getSpk/${id}`)
    return data
}

export const fetchManagers = async(id) => {
    console.log("name: " + id)
    const {data} = await $host.get(`/api/path/getManagers/${id}`)
    return data
}