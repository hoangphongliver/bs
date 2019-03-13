function RenderUser(books){
    var allbook = '';
        for(var book of books){
            allbook += '<div class="book">';
                allbook += '<div class="hover">';
                    allbook += '<a href="/?page=chitietsach&id='+book.id+'">';
                        allbook += '<img src='+ book.image +'>';
                    allbook += '</a>';
                    allbook += '<p id="pb_1">';
                        allbook+= '<a href="#">' + '-15% '+ '</a>';
                    allbook += '</p>';
                    allbook += '<p id="pb_2" class="p_magin">';
                        allbook += '<a href="#">' + book.name + '</a>';
                    allbook += '</p>';
                    allbook += '<p id="pb_3" class="p_magin">' + book.tacgia + '</p>';
                    allbook += '<p id="pb_4" class="p_magin">' + book.giagoc + 'đ' +  '</p>';
                    allbook += '<p id="pb_5" class="p_magin">' + book.giagiam + 'đ' + '</p>';
                allbook += '</div>';
             allbook += '</div>';
        }
    document.getElementById('books_category').innerHTML = allbook;      
}