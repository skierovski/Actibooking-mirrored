using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Services
{
    public class TrainerServices
    {
        private readonly IUnitOfWork _uow;

        public TrainerServices(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<Trainer> CheckIfExist(int trainerId)
        {
            if (await _uow.TrainerRepo.GetByIdAsync(trainerId) != null)
            {
                Trainer trainer = await _uow.TrainerRepo.GetByIdAsync(trainerId);
                return trainer;
            }
            throw new NotFoundException("trainer", trainerId);
        }


    }
}
