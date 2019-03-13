function RenderUser(books) {
    var html = '';
    for (let book of books) {
        if (id == book.id) {
            let noidungphu = book.noidung.slice(0, 300);
            html += '<h3>' + book.name + '</h3>';
            html += '<p> Tác giả: ';
            html += '<a href=#>' + book.tacgia + '</a>';
            html += '</p>';
            html += '<p> Nhà xuất bản: NXB văn hóa - Văn nghệ';
            html += '</p>';
            html += '<p> Người dịch: Nguyễn Hiền Thu' + '</p>';
            html += '<p id="p1">Nhà phát hành:  ';
            html += '<a href="#">' + book.nhaphathanh + '</a>';
            html += '</p>';
            html += '<p id="p0">' + noidungphu + '...' + '</p>';
            html += '</p>';
            html += '<a id="a0" href="#p3">Xem Thêm' + '</a>';
        }
        document.getElementById('ttchitiet').innerHTML = html;
    }

    var html1 = '';
    for (let book of books) {
        if (id == book.id) {
            html1 += '<img src=' + book.image + '>';
        }
        document.getElementById("img").innerHTML = html1;
    }


    var html2 = '';
    for (let book of books) {
        if (id == book.id) {
            html2 += '<p> Thông Tin Thanh Toán' + '</p>';

            html2 += '<p> Giá bìa';
            html2 += '<span id="sp1">' + book.giagoc + 'đ' + '</span>';
            html2 += '</p>';

            html2 += '<p>Giá bán:';
            html2 += '<span id="sp2">' + book.giagiam + 'đ' + '</span>';
            html2 += '</p>';

            html2 += '<p>Tiết kiệm: ';
            html2 += '<span id="sp3">30.000đ (-20%)' + '</span>';
            html2 += '</p>';

            html2 += '<p id="p2">';
            html2 += '<i class="far fa-check-circle">' + '</i>';
            html2 += 'CÓ HÀNG</p>';

            html2 += '<a href="#">';
            html2 += '<i class="fas fa-cart-plus">' + '</i>';
            html2 += 'MUA NGAY</a>';
        }
        document.getElementById("thanhtoan").innerHTML = html2;
    }
    var html4 = '';
    var html3 = '';
    var tacgia = '';
    var tensach = '';
    for (let book of books) {
        if (id == book.id) {
            html3 += book.name;
            html4 += book.noidung;
            tacgia += book.tacgia;
            tensach += book.name;
        }
        // document.getElementById('p4').innerHTML = html3;
        document.getElementById('p3').innerHTML = html3;
        document.getElementById('p4').innerHTML = html4;
        document.getElementById('tacgia').innerHTML = tacgia;
        document.getElementById('a30').innerHTML = tensach;

    }
}


/*  var html = '<div class="sbcnhatnam">';
    for (var book of books) {
        html += '<div class="sbcl">';
        html += '<div class="imgsach">';
        html += '<img src=' + book.image + '>';
        html += '<li>';
        html += '<a href="#">' + '-20%' + '</a>';
        html += '/li';
        html += '</div>';

        html += '<div class="motasach">';
        html += '<h4>';
        html += '<a href="#">' + book.name + '</a>';
        html += '</h4>';
        html += '<p id="p1">';
        html += '<a href="#">' + book.tacgia + '</a>';
        html += '</p>';
        html += '<p id="p2">';
        html += '<a href="#">' + book.noidung + '</a>';
        html += '</p>';

        html += '<ul>';
        html += '<li>';
        html += '<a href="#">' + book.giagoc + 'đ' + '</a>';
        html += '</li>';
        html += '<li>';
        html += '<a href="#" id="a1">' + book.giagiam + 'đ' + '</a>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
    }
    html += '</div>';
    document.getElementById('sbcnhatnam_123').innerHTML = html; */

