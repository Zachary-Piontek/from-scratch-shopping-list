import { client } from './client.js';

export async function addItem(item) {
    const response = await client
        .from('list')
        .insert(item)
        .single();

    return response.data;
}

export async function allItems() {
    const response = await client.from('list').select();
    // console.log(response);
    return response.data;
}

export async function updateItem(item) {
    const response = await client
        .from('list')
        .update(item)
        .match({ id: item.id })
        .single();

    return response.data;
}