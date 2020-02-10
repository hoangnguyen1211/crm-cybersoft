export class KhoaHoc {
    constructor(id, tenKhoaHoc, biDanh, hinhAnh, soNgayKichHoat, moTa, danhSachLoTrinh = [], danhSachChuongHoc = []){
        this.id = id;
        this.tenKhoaHoc = tenKhoaHoc;
        this.biDanh = biDanh;
        this.soNgayKichHoat = soNgayKichHoat;
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
        this.danhSachLoTrinh = danhSachLoTrinh;
        this.danhSachChuongHoc = danhSachChuongHoc;
    }
}