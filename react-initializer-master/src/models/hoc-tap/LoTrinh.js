export class LoTrinh {
    constructor(id, tenLoTrinh, biDanh, hocPhi, moTa, danhSachKhoaHoc = []){
        this.id = id;
        this.tenLoTrinh = tenLoTrinh;
        this.biDanh = biDanh,
        this.hocPhi = hocPhi;
        this.moTa = moTa;
        this.danhSachKhoaHoc = danhSachKhoaHoc;
    }
}