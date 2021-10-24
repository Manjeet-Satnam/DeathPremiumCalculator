using DeathPremium.Services.Interface;
using DeathPremium.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DeathPremium.Services.Services
{
    public class DeathPremiumCalcService : IDeathPremiumCalcService
    {
        /// <summary>
        /// Calculate Death Monthly Premium
        /// </summary>
        /// <param name="model"></param>
        /// <returns>return calculated death premium</returns>
        public async Task<decimal> CalculatePremiumAmount(DeathPremiumRequestModel model)
        {
            decimal deathPremiumAmount = 0;
            OccupationRating rating = new OccupationRating();
            try
            {
                decimal occRating =  rating.GetRating(model.Occupation);//get OccupationRating from GetRating()function
                deathPremiumAmount = (model.DeathSumInsured * occRating * model.Age) / 1000 * 12;
                return deathPremiumAmount;
            }
            catch (Exception ex)
            {
                throw new ApiException(ex.Message);
            }
           
        }

        /// <summary>
        /// Bind Occupation Dropdown list
        /// </summary>
        /// <returns>return occupation list to ui</returns>
        public async Task<List<OccupationModel>> BindOccupation()
        {
            return new List<OccupationModel> {

                {new OccupationModel() {Occupation= "Cleaner",Rating= "LightManual" } },
                {new OccupationModel() {Occupation= "Doctor",Rating= "Profession" } },
                {new OccupationModel() {Occupation= "Author",Rating= "WhiteCollar" } },
                {new OccupationModel() {Occupation= "Farmer",Rating= "HeavyManual" } },
                {new OccupationModel() {Occupation= "Mechanic",Rating= "HeavyManual" } },
                {new OccupationModel() {Occupation= "Florist",Rating= "LightManual" } }
                };
        }
    }
}
