using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NuGet.DependencyResolver;

namespace Actibooking.Controllers
{
    public class TrainerController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly UserManager<ActiBookingUser> _userManager;
        public TrainerController(IUnitOfWork uow, UserManager<ActiBookingUser> userManager)
        {
            _uow = uow;
            _userManager = userManager;
        }

        [HttpGet("get-all-trainers")]
        public async Task<IActionResult> GetAll()
        {
            IEnumerable<Trainer>? trainers = await _uow.TrainerRepo.GetAsync();
            if (trainers != null)
            {
                return Ok(trainers);
            }
            throw new NotFoundException("Trener not found", trainers);
        }

        [HttpGet("get-trainer/{id}")]
        public async Task<IActionResult> GetTrainer(int id)
        {
            Trainer trainer = await _uow.TrainerRepo.GetByIdAsync(id);
            if (trainer != null)
            {
                return Ok(trainer);
            }
            throw new NotFoundException("Trener not found", id);

        }

        [HttpPost("create-trainer")]
        public async Task<IActionResult> CreateTrainer(string userId)
        {
            ActiBookingUser? user = _userManager.Users.FirstOrDefault(u => u.Id == userId);
            if (user != null)
            {
                user.IsTrainer = true;
                Trainer trainer = new Trainer();
                await _uow.TrainerRepo.InsertAsync(trainer);
                user.trainer = trainer;
                await _userManager.UpdateAsync(user);
                await _uow.SaveChangesAsync();
                return Ok(user);
            }
            throw new BadRequestException("Something was wrong");
        }

        [HttpPost("add-trainer")]
        public async Task<IActionResult> AddTrainer([FromQuery] int organizationId, int trainerId)
        {
            Organization? org = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
            if (org != null)
            {
                Trainer trainer = await _uow.TrainerRepo.GetByIdAsync(trainerId);
                org.Trainers.Add(trainer);
                await _uow.SaveChangesAsync();
                return Ok(trainer);
            }
            throw new NotFoundException("Organization not found", organizationId);
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
