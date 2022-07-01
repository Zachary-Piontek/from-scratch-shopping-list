import { client } from './client.js';

export async function addItem(item) {
    const response = await client
        .from('list')
        .insert(item)
        .single();

    return response;
}

export async function allItems() {
    const response = await client
        .from('list')
        .select();

    return response;
}