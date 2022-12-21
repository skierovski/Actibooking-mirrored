using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Actibooking.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NuGet.DependencyResolver;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainersController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly UserManager<ActiBookingUser> _userManager;
        private readonly ITrainerManager _trainerManager;
        public TrainersController(IUnitOfWork uow, UserManager<ActiBookingUser> userManager, ITrainerManager trainerManager)
        {
            _uow = uow;
            _userManager = userManager;
            _trainerManager = trainerManager;
        }

        [HttpGet("")]
        public async Task<IEnumerable<Trainer>> GetAll()
        {
            return await _trainerManager.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<Trainer> GetTrainer(int id)
        {
            return await _trainerManager.GetTrainer(id);
        }

        [HttpGet("get-trainers-for-organization")]
        public async Task<IEnumerable<Trainer>> GetTrainersForOrganization(int organizationId)
        {
            return await _trainerManager.GetTrainersForOrganization(organizationId);
        }

        [HttpPost("{userId}")]
        public async Task<ActiBookingUser> CreateTrainer(string userId)
        {
            return await _trainerManager.CreateTrainer(userId);
        }

        [HttpPost("add-trainer")]
        public async Task<Trainer> AddTrainer([FromQuery] int organizationId, int trainerId)
        {
            return await _trainerManager.AddTrainer(organizationId, trainerId);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainer(int id)
        {
            await _trainerManager.DeleteTrainer(id);
            return Ok();
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateTrainer([FromQuery] Trainer trainer)
        {
            if (await _trainerManager.UpdateTrainer(trainer))
            {
                return Ok("Trainer updated successfuly");
            }
            throw new NotFoundException("Trainer", trainer);
        }
    }
}
