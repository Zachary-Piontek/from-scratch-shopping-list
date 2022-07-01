
export default function createItems(root, { handleUpdate }) {
    return ({ items }) => {
        root.innerHTML = '';

        for (const item of items) {
            // console.log(item);
            const li = itemList({
                item,
                handleUpdate,
            });
            root.append(li);
        }
    };
}

export function itemList({ item, handleUpdate }) {
    // console.log(item);
    const li = document.createElement('li');
    li.textContent = `Buy ${item.item} and get ${item.quantity} of them.`;

    const boughtItem = document.createElement('input');
    boughtItem.classList.add('check');
    boughtItem.type = 'checkbox';
    boughtItem.checked = item;
    boughtItem.addEventListener('change', () => {
        handleUpdate(item);
    });

    li.append(boughtItem);

    return li;
}