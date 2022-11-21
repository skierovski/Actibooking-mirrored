using Actibooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Services
{
    public interface ITrainerManager
    {
        Task<IEnumerable<Trainer>> GetAll();
        Task<Trainer> GetTrainer(int id);
        Task<IEnumerable<Trainer>> GetTrainersForOrganization(int organizationId);
        Task<ActiBookingUser> CreateTrainer(string userId);
        Task<Trainer> AddTrainer([FromQuery] int organizationId, int trainerId);
        Task<bool> DeleteTrainer(int id);
        Task<bool> UpdateTrainer([FromQuery] Trainer trainer);
    }
}
