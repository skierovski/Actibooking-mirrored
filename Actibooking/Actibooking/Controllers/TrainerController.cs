using Actibooking.Data.Repository;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Actibooking.Controllers
{
    public class TrainerController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly ILogger<OrganizationsController> _logger;
        private readonly IMapper _mapper;
        public TrainerController(IUnitOfWork uow, ILogger<OrganizationsController> logger, IMapper mapper)
        {
            _uow = uow;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("get-all-trainers")]
        public async Task<IActionResult> GetAll()
        {
            var trainers = await _uow.TrainerRepo.GetAsync();
            return Ok(trainers);
        }

        [HttpGet("get-trainer/{id}")]
        public async Task<IActionResult> GetTrainer(int id)
        {
            var trainer = await _uow.TrainerRepo.GetByIdAsync(id);
            return Ok(trainer);
        }

        [HttpPost("create-trainer")]
        public async Task<IActionResult> CreateTrainer()
        {
            await _uow.TrainerRepo.InsertAsync(new Trainer());
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("add-trainer")]
        public async Task<IActionResult> AddTrainer([FromQuery] int organizationId, int trainerId)
        {
            Organization org = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
            if (org != null)
            {
                Trainer trainer = await _uow.TrainerRepo.GetByIdAsync(trainerId);
                org.Trainers.Add(trainer);
                await _uow.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpDelete("delete-trainer/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteTrainer(int id)
        {
            await _uow.TrainerRepo.DeleteAsync(id);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("update-trainer")]
        public async Task<IActionResult> UpdateTrainer([FromQuery] Trainer trainer)
        {
            _uow.TrainerRepo.Update(trainer);
            await _uow.SaveChangesAsync();
            return Ok();
        }
    }
}
