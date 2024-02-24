import {$host} from './index';

export const fetchAll = async(id) => {
    const {data} = await $host.get(`/api/list/getAll/${id}`)
    return data
}