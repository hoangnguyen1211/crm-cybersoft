export class LopHoc {
    constructor(id, maLoTrinh, tenLopHoc, biDanh, soHocVien, 
        hocPhi, ngayBatDau, ngayKetThuc, maTrangThai = 1, danhSachGiangVien = [], danhSachMentor = [], danhSachHocVien = []){
        this.id = id;
        this.tenLopHoc = tenLopHoc;
        this.biDanh = biDanh;
        this.soHocVien = soHocVien;
        this.hocPhi = hocPhi;
        this.ngayBatDau = ngayBatDau;
        this.ngayKetThuc = ngayKetThuc;
        this.maTrangThai = maTrangThai;
        this.danhSachGiangVien = danhSachGiangVien;
        this.danhSachMentor = danhSachMentor;
        this.danhSachHocVien = danhSachHocVien;
        this.maLoTrinh = maLoTrinh;
    }
}