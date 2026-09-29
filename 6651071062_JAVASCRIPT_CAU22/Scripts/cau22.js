function $(id) {
    return document.getElementById(id);
}

function layso() {
    let a = $('n1').value, b = $('n2').value;
    if (a == '' || b == '' || isNaN(a) || isNaN(b)) {
        $('kq').innerText = 'Vui lòng nhập hai số hợp lệ!';
        return null;
    }
    return [Number(a), Number(b)];
}

function nhan() {
    let s = layso();
    if (s != null) {
        $('kq').innerText = s[0] * s[1];
    }
}

function chia() {
    let s = layso();
    if (s == null) {
        return;
    }
    if (s[1] == 0) {
        $('kq').innerText = 'Không thể chia cho 0!';
    } else {
        $('kq').innerText = s[0] / s[1];
    }
}
