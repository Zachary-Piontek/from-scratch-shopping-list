
export default function createItems(root, { handleUpdate, handleDelete }) {
    return ({ items }) => {
        root.innerHTML = '';

        for (const item of items) {
            // console.log(item);
            const li = itemList({
                item,
                handleUpdate,
                handleDelete,
            });
            root.append(li);
        }
    };
}

export function itemList({ item, handleUpdate, handleDelete }) {
    // console.log(item);
    const li = document.createElement('li');
    li.textContent = `Buy ${item.item} and get ${item.quantity} of them.`;
    
    const boughtItem = document.createElement('input');
    boughtItem.classList.add('check');
    boughtItem.type = 'checkbox';
    // boughtItem.checked = item;
    boughtItem.addEventListener('change', () => {
        handleUpdate(item);
    });
    
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '␡';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        handleDelete(item);
    });

    li.append(boughtItem, deleteButton);

    return li;
}