// チェックボックスの要素を取得
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// ページが読み込まれたときにチェックボックスの状態をlocalStorageから取得して設定
checkbox1.checked = localStorage.getItem('checkbox1Checked') === 'true';
checkbox2.checked = localStorage.getItem('checkbox2Checked') === 'true';

// チェックボックスの状態が変化したときにlocalStorageに保存
checkbox1.addEventListener('change', () => {
    localStorage.setItem('checkbox1Checked', checkbox1.checked);
});

checkbox2.addEventListener('change', () => {
    localStorage.setItem('checkbox2Checked', checkbox2.checked);
});

// 検索ボックスの要素を取得
const searchBox = document.getElementById('sbox');

// 検索ボタンの要素を取得
const searchButton = document.getElementById('sbtn');

// チェックボックスを非表示にする関数
function hideCheckbox(checkboxElement) {
    checkboxElement.parentElement.style.display = 'none';
}

// チェックボックスを表示する関数
function showCheckbox(checkboxElement) {
    checkboxElement.parentElement.style.display = 'block';
}

// 検索ボタンクリック時の処理
searchButton.addEventListener('click', () => {
    const keyword = searchBox.value.toLowerCase(); // 入力されたキーワードを小文字に変換

    if (keyword.trim() === '') {
        // キーワードが空白の場合、すべての項目を表示
        showCheckbox(checkbox1);
        showCheckbox(checkbox2);
    } else {
        // キーワードに一致する項目のみ表示
        if (!checkbox1.labels[0].textContent.toLowerCase().includes(keyword)) {
            hideCheckbox(checkbox1);
        } else {
            showCheckbox(checkbox1);
        }

        if (!checkbox2.labels[0].textContent.toLowerCase().includes(keyword)) {
            hideCheckbox(checkbox2);
        } else {
            showCheckbox(checkbox2);
        }
    }
});
