﻿using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SoloDevApp.Service.Services;
using SoloDevApp.Service.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SoloDevApp.Api.Controllers
{
    [Route("api/lophoc")]
    [ApiController]
    public class LopHocController : ControllerBase
    {
        private ILopHocService _lopHocService;

        public LopHocController(ILopHocService lopHocService)
        {
            _lopHocService = lopHocService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return await _lopHocService.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return await _lopHocService.GetSingleByIdAsync(id);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetPaging(int page, int size, string keywords = "")
        {
            return await _lopHocService.GetPagingAsync(page, size, keywords);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] LopHocViewModel model)
        {
            return await _lopHocService.InsertAsync(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] LopHocViewModel model)
        {
            return await _lopHocService.UpdateAsync(id, model);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody] List<dynamic> Ids)
        {
            return await _lopHocService.DeleteByIdAsync(Ids);
        }
    }
}