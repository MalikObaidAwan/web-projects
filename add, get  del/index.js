document.addEventListener('DOMContentLoaded', () => {
    const dataForm = document.getElementById('dataForm');
    const itemNameInput = document.getElementById('itemName');
    const itemsList = document.getElementById('itemsList');
    const itemIndexInput = document.getElementById('itemIndex');
    const saveButton = document.getElementById('saveButton');


    function loadItems() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        itemsList.innerHTML = '';
        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <span>${item}</span>
                <div>
                    <i class="fa fa-pencil-square" aria-hidden="true" onclick="editItem(${index})"></i>
                    <i class="fa fa-trash" aria-hidden="true"onclick="deleteItem(${index})"></i>
                </div>
            `;
            itemsList.appendChild(itemDiv);
        });
    }

    
    dataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemName = itemNameInput.value.trim();
        const items = JSON.parse(localStorage.getItem('items')) || [];
        const itemIndex = itemIndexInput.value;

        if (itemIndex) {
            items[itemIndex] = itemName;
        } else {
            items.push(itemName);
        }

        localStorage.setItem('items', JSON.stringify(items));
        itemNameInput.value = '';
        itemIndexInput.value = '';
        saveButton.textContent = 'Save';
        loadItems();
    });

    
    window.editItem = function(index) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        itemNameInput.value = items[index];
        itemIndexInput.value = index;
        saveButton.textContent = 'Update';
    }

    
    window.deleteItem = function(index) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        loadItems();
    }
    loadItems();
});
