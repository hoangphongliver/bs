var arr_book = [
    {
        id: 7,
        name: 'Chúa Tể Chia Nhẫn',
        tacgia: 'Walter David',
        noidung: 'Ông là thiên tài sáng tạo nhất trong lịch sử. Ông có thể truyền lại cho chúng',
        image: 'http://cafefcdn.com/2017/photo-1-1501496971180.jpg',
        giagoc: '75.000',
        giagiam: '50.000'
    },
    {
        id: 8,
        name: 'What We Were Promises',
        tacgia: 'Walter David',
        noidung: 'Ông là thiên tài sáng tạo nhất trong lịch sử. Ông có thể truyền lại cho chúng',
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/neg_esfszlt/2018_08_26/bookskim684e4fe2a0a511e893e324d1703d2a7a780x1208.jpg',
        giagoc: '90.000',
        giagiam: '75.000'
    },
    {
        id: 9,
        name: 'Chỉ Cần Mẩu Khăn Giấy',
        tacgia: 'Dan Roam',
        noidung: 'bằng việc cầm bút lên và vẽ ra các mảnh vấn đề của chúng ta.Đó là những điều Dan Roam viết trong cuốn',
        image: 'https://sachvui.com/cover/2019/chi-can-mau-khan-giay-dan-roam.jpg',
        giagoc: '100.000',
        giagiam: '60.000'
    },
    {
        id: 10,
        name: 'Nợ Em Một Đời Hạnh Phúc',
        tacgia: ' Phỉ Ngã Tư Tồn',
        noidung: 'Bảy năm trước.Cô nói: Tôi cố ý đấy, để dính bầu là tôi cố ý, nạo nó đi cũng là theo kế hoạch, chỉ để hành hạ anh. Trên đời này chuyện tàn nhẫn nhất là gì anh biết không?',
        image: 'https://sachvui.com/cover/2018/no-em-mot-doi-hanh-phuc-tap-1.jpg',
        giagoc: '95.000',
        giagiam: '80.000'
    },
    {
        id: 11,
        name: 'Cuộc Đời Ngoài Cửa',
        tacgia: 'Nguyễn Danh Lam',
        noidung: 'Trong vai một người viết tiểu thuyết, Nguyễn Danh Lam hẳn là mẫu nhà văn không thích, thậm chí rất dị ứng, việc cưng nựng chiều chuộng các nhân vật của mình',
        image: 'https://sachvui.com/cover/2018/cuoc-doi-ngoai-cua.jpg',
        giagoc: '120.000',
        giagiam: '100.000'
    },
    {
        id: 12,
        name: 'Thủy Xa Quán',
        tacgia: 'Yukito Ayatsuji',
        noidung: 'Vị kiến trúc sư tài hoa năm nào không còn, nhưng Thập Giác Quán, Thủy Xa Quán... và những tác phẩm tinh xảo kiêm quái đản khác của ông ta vẫn tiếp tục là hiện trường cho những cái chết thảm khốc',
        image: 'https://sachvui.com/cover/2018/thuy-xa-quan.jpg',
        giagoc: '180.000',
        giagiam: '150.000'
    },
    {
        id: 13,
        name: 'Truyện Kể Đêm Giáng Sinh',
        tacgia: 'Linh mục Phương Đình Toại',
        noidung: 'Quyển sách là tập hợp của những mẫu truyện truyền thuyết cũng như những câu chuyện có thật đã được bạn và tôi cùng kể lại cho nhau nhằm tôn lên ý nghĩa của việc Con Thiên Chúa làm Người.',
        image: 'https://sachvui.com/cover/2018/truyen-ke-dem-giang-sinh.jpg',
        giagoc: '130.000',
        giagiam: '90.000'
    }
];
var html = '<div class="sbcnhatnam">';
for(let i=0 ; i<arr_book.length ; i++){
    var book = arr_book[i];
    if(book.id <= 12){
    var noidung1 = book.noidung.slice(0,95);
    html += '<div class="sbcl">';
        html += '<div class="imgsach">';
            html += '<img src='+ book.image +'>';
            html += '<li>';
                html += '<a href="?page=chitietsach&id='+ book.id +'">' + '-20%' + '</a>';   
            html += '/li';
        html += '</div>';

        html += '<div class="motasach">';
            html += '<h4>';
                html += '<a href="?page=chitietsach&id='+ book.id +'">' + book.name + '</a>';
            html += '</h4>';
            html += '<p id="p1">';
                html += '<a href="?page=chitietsach&id='+ book.id +'">' + book.tacgia + '</a>';
            html += '</p>';
            html += '<p id="p2">';
                html += '<a href="?page=chitietsach&id='+ book.id +'">' + noidung1 +'...'+ '</a>';
            html += '</p>';
            
            html += '<ul>';
                html += '<li>';
                    html += '<a  href="?page=chitietsach&id='+ book.id +'">' + book.giagoc + 'đ' + '</a>';
                html += '</li>'; 
                html += '<li>';
                    html += '<a href="?page=chitietsach&id='+ book.id +'" id="a1">' + book.giagiam + 'đ' + '</a>';
                html += '</li>'; 
            html += '</ul>';
        html += '</div>';
    html += '</div>';
    }
}
html += '</div>';
document.getElementById('sbcnhatnam_123').innerHTML = html;