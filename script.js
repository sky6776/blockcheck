
const checkbox = document.getElementById('checkbox');
const checkbox2 = document.getElementById('checkbox2');

checkbox.checked = localStorage.getItem('checkboxChecked') === 'true';
checkbox2.checked = localStorage.getItem('checkbox2Checked') === 'true';


checkbox.addEventListener('change', () => {
    localStorage.setItem('checkboxChecked', checkbox.checked);
});

checkbox2.addEventListener('change', () => {
    localStorage.setItem('checkbox2Checked', checkbox2.checked);
});

const searchBox = document.getElementById('sbox');


const searchButton = document.getElementById('sbtn');

function hideCheckbox(checkboxElement) {
    checkboxElement.parentElement.style.display = 'none';
}

function showCheckbox(checkboxElement) {
    checkboxElement.parentElement.style.display = 'block';
}

searchButton.addEventListener('click', () => {
    const keyword = searchBox.value.toLowerCase();

    if (keyword.trim() === '') {
        showCheckbox(checkbox);
        showCheckbox(checkbox2);
    } else {
        if (!checkbox.labels[0].textContent.toLowerCase().includes(keyword)) {
            hideCheckbox(checkbox);
        } else {
            showCheckbox(checkbox);
        }

        if (!checkbox2.labels[0].textContent.toLowerCase().includes(keyword)) {
            hideCheckbox(checkbox2);
        } else {
            showCheckbox(checkbox2);
        }
    }
});

const checkbox = document.getElementById('checkbox');
const checkbox2 = document.getElementById('checkbox2');

checkbox.checked = localStorage.getItem('checkboxChecked') === 'true';
checkbox2.checked = localStorage.getItem('checkbox2Checked') === 'true';

checkbox.addEventListener('change', () => {
    localStorage.setItem('checkboxChecked', checkbox.checked);
});

checkbox2.addEventListener('change', () => {
    localStorage.setItem('checkbox2Checked', checkbox2.checked);
});
