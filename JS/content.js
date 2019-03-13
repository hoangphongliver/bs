function RenderUser(books) {
    var html = '<div class="sbcnhatnam">';
    for (var book of books) {
        var noidung = book.noidung.slice(0,85);
       if(book.id >=7 && book.id <=12 ){
        html += '<div class="sbcl">';
        html += '<div class="imgsach">';
        html += '<img src=' + book.image + '>';
        html += '<li>';
        html += '<a href="#">' + '-20%' + '</a>';
        html += '/li';
        html += '</div>';

        html += '<div class="motasach">';
        html += '<h4>';
        html += '<a href="/?page=chitietsach&id='+book.id+'">' + book.name + '</a>';
        html += '</h4>';
        html += '<p id="p1">';
        html += '<a href="/?page=chitietsach&id='+book.id+'">' + book.tacgia + '</a>';
        html += '</p>';
        html += '<p id="p2">';
        html += '<a href="/?page=chitietsach&id='+book.id+'">' + noidung + '...' + '</a>';
        html += '</p>';

        html += '<ul>';
        html += '<li>';
        html += '<a href="/?page=chitietsach&id='+book.id+'">' + book.giagoc + 'đ' + '</a>';
        html += '</li>';
        html += '<li>';
        html += '<a href="/?page=chitietsach&id='+book.id+'" id="a1">' + book.giagiam + 'đ' + '</a>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
       }
    }
    html += '</div>';
    document.getElementById('sbcnhatnam_123').innerHTML = html;

    // Render sach ban chay

    var html1 = '<div class="sbcnhatnam">';
    for (var book of books) {
        var noidung = book.noidung.slice(0,85);
       if(book.id >=1 && book.id <=6 ){
        html1 += '<div class="sbcl">';
        html1 += '<div class="imgsach">';
        html1 += '<img src=' + book.image + '>';
        html1 += '<li>';
        html1 += '<a href="#">' + '-20%' + '</a>';
        html1 += '/li';
        html1 += '</div>';

        html1 += '<div class="motasach">';
        html1 += '<h4>';
        html1 += '<a href="/?page=chitietsach&id='+book.id+'">' + book.name + '</a>';
        html1 += '</h4>';
        html1 += '<p id="p1">';
        html1 += '<a href="/?page=chitietsach&id='+book.id+'">' + book.tacgia + '</a>';
        html1 += '</p>';
        html1 += '<p id="p2">';
        html1 += '<a href="/?page=chitietsach&id='+book.id+'">' + noidung + '...' + '</a>';
        html1 += '</p>';

        html1 += '<ul>';
        html1 += '<li>';
        html1 += '<a href="/?page=chitietsach&id='+book.id+'">' + book.giagoc + 'đ' + '</a>';
        html1 += '</li>';
        html1 += '<li>';
        html1 += '<a href="/?page=chitietsach&id='+book.id+'" id="a1">' + book.giagiam + 'đ' + '</a>';
        html1 += '</li>';
        html1 += '</ul>';
        html1 += '</div>';
        html1 += '</div>';
       }
    }
    html1 += '</div>';
    document.getElementById('sbcnhatnam').innerHTML = html1;
    document.getElementById('sbcnhatnam_123').innerHTML = html;
}