// export default function createItem(root) {
//     return ({ items }) => {
//         root.innerHTML = '';

//         for (const item of items) {
//             const li = itemList({
//                 item,
//             });
//             root.append(li);
//         }
//     };
// }

export default function createItems(root) {
    return ({ items }) => {
        root.innerHTML = '';

        for (const item of items) {
            console.log(item);
            const li = itemList({
                item,
            });
            root.append(li);
        }
    };
}

export function itemList({ item }) {
    console.log(item);
    const li = document.createElement('li');
    li.textContent = `Buy ${item.item} and get ${item.quantity} of them.`;

    // li.append(li);

    return li;
}