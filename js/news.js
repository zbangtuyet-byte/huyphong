let tintuc = [
    {
        id: 1,
        tieude: "Cách chăm sóc mèo Anh lông ngắn",
        hinh: "tintuc1.jpg",
        ngay: "28/10/2026",
        mota: "Mèo Anh lông ngắn có ngoại hình đáng yêu và tính cách hiền lành. Tìm hiểu cách chăm sóc, cho ăn và vệ sinh để mèo luôn khỏe mạnh.",
        link: "#"
    },
    {
        id: 2,
        tieude: "Những điều cần biết khi nuôi chó Samoyed",
        hinh: "tintuc2.jpg",
        ngay: "27/10/2026",
        mota: "Chó Samoyed nổi bật với bộ lông trắng muốt và vẻ ngoài thân thiện. Bài viết giúp bạn tìm hiểu cách chăm sóc bộ lông và chế độ dinh dưỡng phù hợp.",
        link: "#"
    },
    {
        id: 3,
        tieude: "Hướng dẫn chăm sóc thỏ tai cụp Hà Lan",
        hinh: "tintuc3.jpg",
        ngay: "26/10/2026",
        mota: "Thỏ tai cụp Hà Lan có ngoại hình nhỏ nhắn và đáng yêu. Hãy tìm hiểu về thức ăn, môi trường sống và cách chăm sóc thỏ đúng cách.",
        link: "#"
    },
    {
        id: 4,
        tieude: "Cách nuôi Hamster Winter White cho người mới",
        hinh: "tintuc4.jpg",
        ngay: "25/10/2026",
        mota: "Hamster Winter White là loài thú cưng nhỏ nhắn, dễ thương. Bài viết giới thiệu cách chuẩn bị chuồng, thức ăn và môi trường sống cho hamster.",
        link: "#"
    },
    {
        id: 5,
        tieude: "Những loại thức ăn phù hợp cho thú cưng",
        hinh: "tintuc5.jpg",
        ngay: "24/10/2026",
        mota: "Chế độ dinh dưỡng ảnh hưởng trực tiếp đến sức khỏe của thú cưng. Tìm hiểu cách lựa chọn thức ăn phù hợp với từng loài vật.",
        link: "#"
    },
    {
        id: 6,
        tieude: "Những lưu ý khi lần đầu nuôi thú cưng",
        hinh: "tintuc6.jpg",
        ngay: "23/10/2026",
        mota: "Trước khi đón một người bạn nhỏ về nhà, bạn cần chuẩn bị nơi ở, thức ăn và thời gian chăm sóc để thú cưng thích nghi tốt hơn.",
        link: "#"
    }
];

let danhSachTinTuc = document.getElementById("danhsachtintuc");

if (danhSachTinTuc) {
    for (let i = 0; i < tintuc.length; i++) {
        danhSachTinTuc.innerHTML += `
            <div class="bai-viet">
                <img src="image/${tintuc[i].hinh}" alt="${tintuc[i].tieude}">

                <div class="noi-dung">
                    <div class="ngay-dang">
                        ${tintuc[i].ngay}
                    </div>

                    <h3>${tintuc[i].tieude}</h3>

                    <p>${tintuc[i].mota}</p>

                    <a href="${tintuc[i].link}" class="xem-them">
                        Xem thêm
                    </a>
                </div>
            </div>
        `;
    }
}