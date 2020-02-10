import { BaseApi } from './BaseService';

const uploadFile = (files) => {
    return BaseApi.post(`/api/file/upload`, files);
}

export const FileSevice = {
    uploadFile
}