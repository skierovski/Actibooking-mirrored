using Actibooking.Data.Repository;
using Actibooking.Models;
using Actibooking.Models.DTO;
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
        private readonly IMapper _mapper;
        public TrainerController(IUnitOfWork uow, TrainerServices trainerServices, IMapper mapper)
        {
            _uow = uow;
            _trainerServices = trainerServices;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var trainers = await _trainerServices.CheckIfEmpty();
            return Ok(trainers);
        }

        [HttpGet("{trainerId}")]
        public async Task<IActionResult> GetTrainer(int trainerId)
        {
            var trainer = await _trainerServices.CheckIfTrainerExist(trainerId);
            return Ok(trainer);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateTrainer(NewTrainerDTO newTrainerDTO)
        {
            var user = _trainerServices.CheckIfUserExist(newTrainerDTO.ActiBookingUserId);
            var trainer = _mapper.Map<Trainer>(newTrainerDTO);
            await _uow.TrainerRepo.InsertAsync(trainer);
            await _uow.SaveChangesAsync();
            return Ok("Trainer added");
        }
        // przenieś do organization
        [HttpPost("add-trainer")]
        public async Task<IActionResult> AddTrainer([FromQuery] int organizationId, int trainerId)
        {
            Organization organization = await _trainerServices.ChechIfOrganizationExist(organizationId);
            Trainer trainer = await _trainerServices.CheckIfTrainerExist(trainerId);
            trainer.OrganizationId = organizationId;
            _uow.TrainerRepo.Update(trainer);
            await _uow.SaveChangesAsync();
            return Ok("Trainer added to organization");
        }

        [HttpDelete("{trainerid}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteTrainer(int trainerid)
        {
            await _uow.TrainerRepo.DeleteAsync(trainerid);
            await _uow.SaveChangesAsync();
            return Ok("Trainer deleted");
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateTrainer(UpdateTrainerDTO updateTrainerDTO)
        {
            var trainer = await _trainerServices.CheckIfTrainerExist(updateTrainerDTO.Id);
            await _trainerServices.MapUpdateTrainer(updateTrainerDTO, trainer);
            _uow.TrainerRepo.Update(trainer);
            await _uow.SaveChangesAsync();
            return Ok("Trainer Updated");
        }
    }
}
