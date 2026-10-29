ds=ds.slice(0,8); // CHỈ SHOW 8 SP
for (let i = 0; i < ds.length; i++) {
    document.getElementById('productAll').innerHTML +=
        `<div class="col3 m3">
            <img src="image/${ds[i].hinh}" alt="">
            <h3 style="color:blue">${ds[i].ten}</h3>
            <p style="color:red">${ds[i].loai}</p>
            <p>${ds[i].mota}</p>
            <h3>${ds[i].gia}</h3>
            <button class="fm1" onclick="addCart(${i},${ds[i].id})">Mua ngay</button>
        </div>`
}
// Trường hợp tạo biến dùng localStorage
let giohang = JSON.parse(localStorage.getItem('giohang_Storage')) || [];
function addCart(index,ID) {
    if (giohang.length==0) {
        alert("Thêm vào giỏ hàng thành công");
        ds[index].sl=1;
        giohang.push(ds[index]);
    } else{
        for (var i = 0; i < giohang.length; i++) {
            // trường hợp 1 trùng id => tăng số lượng +1
            if (giohang[i].id==ID) {
                giohang[i].sl++;
                break;
            }
        }
            // trường hợp 2 ko trùng id => thêm 1 dòng sp
            if (i==giohang.length) {
                ds[index].sl = 1;
                giohang.push(ds[index]);
            }
        
    }
     // gán giỏ hàng vào localStorage
     localStorage.setItem("giohang_Storage", JSON.stringify(giohang)); 
     console.log(JSON.stringify(giohang));
     viewCart();
}
   
function viewCart() {
    let thanhtien =0;
    let tongtien=0;
    let kq =  "";
    for (let i = 0; i < giohang.length; i++) {
        thanhtien = giohang[i].gia*giohang[i].sl;
        tongtien += thanhtien;
        kq +=
       `
       <tr>
            <td>${i+1}</td>
            <td>${giohang[i].ten}</td>
            <td><img src="image/${giohang[i].hinh}" alt="" style="width:100px"></td>
            <td>${giohang[i].sl}</td>
            <td>${giohang[i].gia}</td>
            <td>${thanhtien}</td>
            <td><button class="remove_button fm" type="text" onclick="remove(${i})">Xóa</button></td>
        </tr>
       `
    }
    document.getElementById("addCart").innerHTML = kq;
    document.getElementById("tongtien").innerText = tongtien;
}
function remove(i){
    giohang.splice(i,1); // tiến hành xóa trong màng giohang
    
    // cập nhật lại giỏ hàng vào local
    localStorage.setItem("giohang_Storage", JSON.stringify(giohang)); 

    viewCart(); // hiện thị lại gio hàng đã xóa
}

function thanhToan() {
    // Kiểm tra giỏ hàng có sản phẩm hay không
    if (giohang.length == 0) {
        alert("Giỏ hàng của bạn đang trống!");
    } else {
        let tongtien = 0;

        // Tính tổng tiền các sản phẩm
        for (let i = 0; i < giohang.length; i++) {
            tongtien += giohang[i].gia * giohang[i].sl;
        }

        // Xác nhận thanh toán
        let xacnhan = confirm(
            "Bạn có chắc chắn muốn đặt hàng không?\n" +
            "Tổng tiền: " + tongtien.toLocaleString("vi-VN") + " VNĐ"
        );

        if (xacnhan) {
            alert("Đặt hàng thành công!\nCảm ơn bạn đã mua hàng tại Mèo Béo.");

            // Xóa sản phẩm trong giỏ hàng
            giohang = [];

            // Cập nhật lại localStorage
            localStorage.setItem("giohang_Storage", JSON.stringify(giohang));

            // Hiển thị lại giỏ hàng
            viewCart();
        }
    }
}

viewCart();