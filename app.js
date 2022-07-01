import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import createShoppingForm from './components/ShoppingForm.js';
import { addItem, allItems, updateItem } from './services/list-service.js';
import createItems from './components/Items.js';

// State
let user = null;
let items = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    items = await allItems();
    // console.log(data); 
    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAdd(item, quantity) {
    // console.log(item, quantity);
    const itemsList = { item, quantity };
    const data = await addItem(itemsList);


    items.push(data);

    display();
}

async function handleUpdate(item) {
    item = !item;
    const index = item.indexOf(item);
    item[index] = await updateItem(item);
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ShoppingForm = createShoppingForm(document.getElementById('add-item-form'), { handleAdd });

const Items = createItems(document.getElementById('list-of-items'), {
    handleUpdate,
});

function display() {
    User({ user });
    ShoppingForm();
    Items({ items });
}

handlePageLoad();
