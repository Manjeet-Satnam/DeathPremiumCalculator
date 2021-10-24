using DeathPremium.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DeathPremium.Services.Interface
{
    public interface IDeathPremiumCalcService
    {
        Task<decimal> CalculatePremiumAmount(DeathPremiumRequestModel model);
        Task<List<OccupationModel>> BindOccupation();
    }
}
