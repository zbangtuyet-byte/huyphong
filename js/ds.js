let ds = [
    { id: 1, ten: 'Mèo Cam Năng Động', gia: 3500000, hinh: 'thucung_meo1.png', mota: 'Tinh nghịch, thân thiện và thích vui chơi.', loai: 'Meo' },
    { id: 2, ten: 'Mèo Cam Mập Ú', gia: 5800000, hinh: 'thucung_meo2.jpg', mota: 'Đáng yêu, hiền lành và rất quấn chủ.', loai: 'Meo' },
    { id: 3, ten: 'Mèo Ragdoll', gia: 8000000, hinh: 'thucung_meo3.jpg', mota: 'Sang trọng, đáng yêu và rất quấn người.', loai: 'Meo' },
    { id: 4, ten: 'Mèo Cam Lông Dài', gia: 5500000, hinh: 'thucung_meo5.png', mota: 'Bộ lông mềm mại, tính cách dịu dàng.', loai: 'Meo' },

    { id: 5, ten: 'Chó Samoyed trắng', gia: 8900000, hinh: 'thucung_chosamoyed1.png', mota: ' Thuần chủng, sinh sản tại Trại Mèo Béo', loai: 'Cho' },
    { id: 6, ten: 'Chó Samoyed con', gia: 9200000, hinh: 'thucung_chosamoyed2.png', mota: ' Thuần chủng, sinh sản tại Trại Mèo Béo.Nhanh nhẹn, ăn uống tốt 2 tháng tuổi', loai: 'Cho' },
    { id: 7, ten: 'Chó Samoyed trưởng thành', gia: 8500000, hinh: 'thucung_chosamoyed3.png', mota: 'Bé thân thiện, thông minh, năng động và rất thích chơi đùa với con người, phù hợp với những gia đình yêu thú cưng.', loai: 'Cho' },
    { id: 8, ten: 'Chicken Parm Burger', gia: 8885000, hinh: 'thucung_chosamoyed4.png', mota: 'Samoyed sở hữu bộ lông trắng muốt, dày mềm cùng nụ cười đặc trưng vô cùng đáng yêu. Bé thân thiện, thông minh', loai: 'Cho' },

    { id: 9, ten: 'Thỏ tai cụp Hà Lan vàng nhỏ nhắn', gia: 5060000, hinh: 'thucung_thoHolland Lop1.png', mota: 'Bé có tính cách hiền lành, thân thiện và thích được vuốt ve.', loai: 'Tho' },
    { id: 10, ten: 'Thỏ tai cụp Hà Lan vàng nhỏ nhắn', gia: 6205000, hinh: 'thucung_thoHolland Lop2.jpg', mota: 'Thỏ tai cụp Hà Lan sở hữu đôi tai cụp xuống đáng yêu cùng khuôn mặt tròn xinh xắn.', loai: 'Tho' },
    { id: 11, ten: 'Thỏ tai cụp Hà Lan vàng nhỏ nhắn', gia: 5050000, hinh: 'thucung_thoHolland Lop3.png', mota: 'Bộ lông mềm mại, mượt mà với nhiều màu sắc bắt mắt.', loai: 'Tho' },
    { id: 12, ten: 'Thỏ tai cụp Hà Lan vàng nhỏ nhắn', gia: 6100000, hinh: 'thucung_thoHolland Lop4.png', mota: 'Đây là lựa chọn tuyệt vời cho những ai yêu thích thú cưng nhỏ nhắn, dễ thương.', loai: 'Tho' },

    { id: 13, ten: 'Hamster Winter White màu sóc', gia:69000 , hinh: 'thucung_hamster1.png', mota: 'Bộ lông nâu xám pha trắng ở bụng, có sọc sẫm trên lưng. Nhỏ nhắn, nhanh nhẹn, đáng yêu và phù hợp với người mới nuôi hamster.', loai: 'Hamster' },
    { id: 14, ten: 'Hamster Winter White Sapphire', gia: 89000, hinh: 'thucung_hamster2.png', mota: 'Sở hữu bộ lông xám xanh nhẹ nhàng, bụng trắng và đôi mắt đen long lanh. Ngoại hình thanh lịch, hiền lành và dễ thương.', loai: 'Hamster' },
    { id: 15, ten: 'Hamster Winter White trắng', gia: 99000, hinh: 'thucung_hamster3.png', mota: 'Bộ lông trắng muốt, thân hình tròn trịa cùng chiếc mũi hồng xinh xắn. Ngoại hình nổi bật, đáng yêu và thu hút người yêu thú cưng.', loai: 'Hamster' },
    { id: 16, ten: 'Hamster winter white', gia: 109000, hinh: 'thucung_hamster4.png', mota: 'Bộ lông trắng kem pha những mảng màu vàng nâu nhẹ, tạo vẻ ngoài độc đáo. Nhỏ nhắn, xinh xắn và là lựa chọn thú vị cho người thích hamster có màu lông khác biệt.', loai: 'Hamster' }

]
let dm = ["Meo","Cho","Tho","Hamster"];
let danhmuc = ["Meo","Cho","Tho","Hamster"];

let gioithieu = ["TIN TỨC", "LIÊN HỆ"];

let linkGioiThieu = ["news.html", "contact.html"];

let gt = document.getElementById("gioithieu");

if (gt) {
    for (let i = 0; i < gioithieu.length; i++) {
        gt.innerHTML += `
            <li>
                <a href="${linkGioiThieu[i]}">${gioithieu[i]}</a>
            </li>
        `;
    }
}let lienhe = [
    {
        icon: "fa-solid fa-location-dot",
        ten: "Địa chỉ",
        noidung: "TP. Hồ Chí Minh"
    },
    {
        icon: "fa-solid fa-phone",
        ten: "Điện thoại",
        noidung: "0123 456 789"
    },
    {
        icon: "fa-solid fa-envelope",
        ten: "Email",
        noidung: "thucung@example.com"
    },
    {
        icon: "fa-solid fa-clock",
        ten: "Thời gian hoạt động",
        noidung: "Thứ 2 - Chủ nhật"
    }
];

for (let i = 0; i < lienhe.length; i++) {
    document.getElementById("thongtinlienhe").innerHTML +=
        `<div class="bai-viet">
            <div class="noi-dung">
                <h3>
                    <i class="${lienhe[i].icon}"></i>
                    ${lienhe[i].ten}
                </h3>
                <p>${lienhe[i].noidung}</p>
            </div>
        </div>`;
}





