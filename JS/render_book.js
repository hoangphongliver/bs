function RenderUser(books) {
    var allbook = '';
    for (var book of books) {
        allbook += '<div class="book">';
        allbook += '<div class="hover">';
        allbook += '<div class="img">';
        allbook += '<a href="/?page=chitietsach&id=' + book.id + '">';
        allbook += '<img src=' + book.image + ' style="width:100%">';
        allbook += '</a>';
        allbook += '</div>';
        allbook += '<div class="pb">';
        allbook += '<p id="pb_1">';
        allbook += '<a href="#">' + '-15% ' + '</a>';
        allbook += '</p>';
        allbook += '<p id="pb_2" class="p_magin">';
        allbook += '<a href="#">' + book.name + '</a>';
        allbook += '</p>';
        allbook += '<p id="pb_3" class="p_magin">' + book.tacgia + '</p>';
        allbook += '<p id="pb_4" class="p_magin">' + book.giagoc + 'đ' + '</p>';
        allbook += '<p id="pb_5" class="p_magin">' + book.giagiam + 'đ' + '</p>';
        allbook += '<p id="pb_6" class="p_magin">Giảm: ' + '<span>' + '-20%' + '</span>' + '</p>';
        allbook += '</div>';
        allbook += '</div>';
        allbook += '</div>';
    }
    document.getElementById('books_category').innerHTML = allbook;
}