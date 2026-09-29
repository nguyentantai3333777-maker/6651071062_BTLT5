function $(id) {
    return document.getElementById(id);
}

let thu = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

for (let i = 1; i <= 12; i++) {
    $('thang').add(new Option(i, i));
}

function xuatThu() {
    let d = Number($('ngay').value);
    let m = Number($('thang').value);
    let y = Number($('nam').value);
    let t = new Date(y, m - 1, d);
    if (t.getMonth() != m - 1 || t.getDate() != d) {
        $('kq').innerText = 'Ngày không hợp lệ!';
    } else {
        $('kq').innerText = thu[t.getDay()] + ' Ngày ' + d + ' tháng ' + m + ' năm ' + y;
    }
}
