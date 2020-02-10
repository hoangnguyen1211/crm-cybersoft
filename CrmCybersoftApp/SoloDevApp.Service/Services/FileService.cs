using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace SoloDevApp.Service.Services
{
    public interface IFileService
    {
        Task<List<string>> UploadFileAsync(IFormFileCollection files);
    }

    public class FileService : IFileService
    {
        public async Task<List<string>> UploadFileAsync(IFormFileCollection files)
        {
            List<string> list = new List<string>();
            foreach (var file in files)
            {
                if (file != null && file.Length != 0)
                {
                    string filePath = await SaveFileAsync(file);
                    list.Add(filePath);
                }
            }
            return list;
        }

        private async Task<string> SaveFileAsync(IFormFile file)
        {
            var folderName = Path.Combine("wwwroot", "uploads", DateTime.Now.ToString("ddMMyyyy"));
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            // Tạo folder nếu chưa tồn tại
            if (!Directory.Exists(pathToSave))
                Directory.CreateDirectory(pathToSave);

            // Lấy tên file
            string fileName = Path.GetFileName(file.FileName);

            // Tạo đường dẫn tới file
            string path = Path.Combine(pathToSave, fileName);

            // Kiểm tra xem file bị trùng không
            if (File.Exists(path))
            {
                File.Delete(path);
            }

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return $"/uploads/{DateTime.Now.ToString("ddMMyyyy")}/{fileName}";
        }
    }
}