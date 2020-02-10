export class ThongTinKH {
    constructor(id, tenKH, biDanh, email, soDienThoai, thanhPho, quan, diaChi, ngaySinh, nguonGioiThieu, 
        congViecHienTai, truongDaVaDangHoc, mucTieu, diemTiemNang, maTrangThaiKH, maNguoiTuVan, ghiChu){
        this.id = id;
        this.tenKH = tenKH;
        this.biDanh = biDanh;
        this.maTrangThaiKH = maTrangThaiKH;
        this.maNguoiTuVan = maNguoiTuVan;
        this.thongTinKH = {
            email,
            soDienThoai,
            ngaySinh,
            nguonGioiThieu,
            congViecHienTai,
            truongDaVaDangHoc,
            mucTieu,
            diemTiemNang,
            ghiChu
        };
        this.diaChi = {
            thanhPho,
            quan,
            diaChi
        };
    }
}