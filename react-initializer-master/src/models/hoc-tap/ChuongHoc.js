export class ChuongHoc {
    constructor(id = 0, tenChuong, biDanh, maKhoaHoc, tenKhoaHoc, danhSachBaiHoc = []){
        this.id = id;
        this.tenChuong = tenChuong;
        this.biDanh = biDanh;
        this.maKhoaHoc = maKhoaHoc;
        this.tenKhoaHoc = tenKhoaHoc;
        this.danhSachBaiHoc = danhSachBaiHoc;
    }
}