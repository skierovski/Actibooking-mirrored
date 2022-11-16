using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Actibooking.Models.DTO;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Services
{
    public class TrainerServices
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly UserManager<ActiBookingUser> _userManager;

        public TrainerServices(IUnitOfWork uow, IMapper mapper, UserManager<ActiBookingUser> userManager)
        {
            _uow = uow;
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<Trainer> CheckIfTrainerExist(int trainerId)
        {
            var trainer = await _uow.TrainerRepo.GetByIdAsync(trainerId);
            if (trainer != null)
            {
                return trainer;
            }
            throw new NotFoundException("Trainer", trainerId);
        }

        public async Task<IEnumerable<Trainer>> CheckIfEmpty()
        {
            if (await _uow.TrainerRepo.GetAsync() != null)
            {
                return await _uow.TrainerRepo.GetAsync();
            }
            throw new BadRequestException("Not found any trainers");
        }

        public async Task<ActiBookingUser> CheckIfUserExist(string actiBookingUserId)
        {
            var user = await _userManager.FindByIdAsync(actiBookingUserId);
            if (user != null)
            {
                return user;
            }
            throw new NotFoundException("Use", actiBookingUserId);
        }

        public async Task<Organization> ChechIfOrganizationExist(int organizationId)
        {
            var organization = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
            if (organization != null)
            {
                return organization;
            }
            throw new NotFoundException("Organization", organizationId);
        }

        public async Task<Trainer> MapUpdateTrainer(UpdateTrainerDTO updateTrainerDTO, Trainer trainer)
        {
            trainer.Description = updateTrainerDTO.Description;
            trainer.OrganizationId = updateTrainerDTO.OrganizationId;
            trainer.Education = updateTrainerDTO.Education;
            trainer.PhotoUrl = updateTrainerDTO.PhotoUrl;
            return trainer;
        }
    }
}
