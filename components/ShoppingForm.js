
export default function createShoppingForm(form, { handleAdd }) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const data = new FormData(form);

        handleAdd(data.get('name'), data.get('quantity'));
    });
    return () => { };
}