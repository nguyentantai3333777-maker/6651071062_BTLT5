function $(id) {
    return document.getElementById(id);
}

let mon = [
    'Bún bò', 'Hủ tiếu', 'Bánh canh', 'Phở bò', 'Nuôi', 'Bánh mì thịt', 'Bánh cuốn',
    'Cà phê đá', 'Cà phê sữa đá', 'Chanh dây', 'Chanh muối', 'Xí muội', 'Sữa tươi',
    'Cam vắt'
];
let gia = [
    20000, 18000, 17000, 19000, 15000, 12000, 15000, 12000, 15000, 13000, 12000, 14000,
    13000, 17000
];

for (let i = 0; i < 14; i++) {
    if (i < 7) {
        $('food').add(new Option(mon[i], i));
    } else {
        $('drink').add(new Option(mon[i], i));
    }
}

function tinhTien() {
    let tong = 0;
    let html = '<table width="100%" bgcolor="#AAFFFF"><tr><th>Các món đã dùng</th><th>Tiền</th></tr>';
    let ds = [];
    for (let o of $('food').selectedOptions) {
        ds.push(Number(o.value));
    }
    for (let o of $('drink').selectedOptions) {
        ds.push(Number(o.value));
    }
    for (let i of ds) {
        html += '<tr><td>' + mon[i] + '</td><td>' + gia[i] + '</td></tr>';
        tong += gia[i];
    }
    if (document.querySelector('input[name=tg]:checked').value == 'dem') {
        tong = tong * 1.1;
    }
    html += '<tr><td>Tổng tiền</td><td>' + tong + ' đồng</td></tr></table>';
    $('kq').innerHTML = html;
}
