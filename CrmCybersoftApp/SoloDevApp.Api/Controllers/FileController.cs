using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SoloDevApp.Service.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SoloDevApp.Api.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;

        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UpLoad()
        {
            try
            {
                IFormFileCollection files = Request.Form.Files;
                List<string> result = await _fileService.UploadFileAsync(files);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}