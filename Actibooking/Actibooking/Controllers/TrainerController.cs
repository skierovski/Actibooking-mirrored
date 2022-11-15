using Actibooking.Data.Repository;
using Actibooking.Models;
using Actibooking.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainerController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly TrainerServices _trainerServices;
        public TrainerController(IUnitOfWork uow, TrainerServices trainerServices)
        {
            _uow = uow;
            _trainerServices = trainerServices;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var trainers = await _uow.TrainerRepo.GetAsync();
            return Ok(trainers);
        }

        [HttpGet("{trainerId}")]
        public async Task<IActionResult> GetTrainer(int trainerId)
        {
            var trainer = await _trainerServices.CheckIfExist(trainerId);
            return Ok(trainer);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateTrainer()
        {
            await _uow.TrainerRepo.InsertAsync(new Trainer());
            await _uow.SaveChangesAsync();
            return Ok();
        }
        // przenieś do organization
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

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteTrainer(int id)
        {
            await _uow.TrainerRepo.DeleteAsync(id);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateTrainer([FromQuery] Trainer trainer)
        {
            _uow.TrainerRepo.Update(trainer);
            await _uow.SaveChangesAsync();
            return Ok();
        }
    }
}
