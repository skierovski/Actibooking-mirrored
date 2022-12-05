using Actibooking.Controllers;
using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Services
{
    public class TrainerManager: ITrainerManager
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly UserManager<ActiBookingUser> _userManager;
        public TrainerManager(IUnitOfWork uow, IMapper mapper, UserManager<ActiBookingUser> userManager)
        {
            _uow = uow;
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<IEnumerable<Trainer>> GetAll()
        {
            IEnumerable<Trainer>? trainers = await _uow.TrainerRepo.GetAsync();
            if (trainers != null)
            {
                return trainers;
            }
            throw new NotFoundException("Trainer", trainers);
        }

        public async Task<Trainer> GetTrainer(int id)
        {
            Trainer trainer = await _uow.TrainerRepo.GetByIdAsync(id);
            if (trainer != null)
            {
                return trainer;
            }
            throw new NotFoundException("Trener", id);
        }

        public async Task<IEnumerable<Trainer>> GetTrainersForOrganization(int organizationId)
        {
            IEnumerable<Organization> org = await _uow.OrganizationRepo.GetAsync(filter: o => o.Id == organizationId, includeProperties: "Trainers");
            if (org.Count() != 0)
            {
                return org.FirstOrDefault().Trainers;
            }
            throw new NotFoundException("Organization", org);
        }

        public async Task<ActiBookingUser> CreateTrainer(string userId)
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
                return user;
            }
            throw new BadRequestException("Something was wrong");
        }

        public async Task<Trainer> AddTrainer([FromQuery] int organizationId, int trainerId)
        {
            Organization? org = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
            if (org != null)
            {
                Trainer trainer = await _uow.TrainerRepo.GetByIdAsync(trainerId);
                if (org.Trainers is null)
                {
                    org.Trainers = new List<Trainer>() { trainer };
                }
                else
                {
                    org.Trainers.Add(trainer);
                }
                await _uow.SaveChangesAsync();
                return trainer;
            }
            throw new NotFoundException("Organization", organizationId);
        }

        public async Task<bool> DeleteTrainer(int id)
        {
            // Pododawać includy
            try
            {
                await _uow.TrainerRepo.DeleteAsync(id);
                await _uow.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> UpdateTrainer([FromQuery] Trainer trainer)
        {
            Trainer? oldTrainer = await _uow.TrainerRepo.GetByIdAsync(trainer.Id);
            if(oldTrainer != null)
            {
                if(trainer.Description != null) oldTrainer.Description = trainer.Description;
                if(trainer.Education != null) oldTrainer.Education = trainer.Education;
                if(trainer.PhotoUrl != null) oldTrainer.PhotoUrl = trainer.PhotoUrl;
                _uow.TrainerRepo.Update(oldTrainer);
                await _uow.SaveChangesAsync();
                return true;
            }
            return false;
        }   
    }
}
