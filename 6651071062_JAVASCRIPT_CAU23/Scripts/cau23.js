function $(id) {
    return document.getElementById(id);
}

function tinhLuong() {
    let luong = $('luong').value;
    if (luong == '' || isNaN(luong)) {
        $('kq').innerText = 'Lương không hợp lệ!';
        return;
    }
    $('kq').innerText = Number(luong) * Number($('hs').value);
}
