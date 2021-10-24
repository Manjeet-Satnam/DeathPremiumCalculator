using DeathPremium.API.Models;
using DeathPremium.Services.Interface;
using DeathPremium.Services.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeathPremium.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyAllowSpecificOrigins")]
    public class DeathPremiumCalcController : ControllerBase
    {
        private readonly IDeathPremiumCalcService _service;
        public DeathPremiumCalcController(IDeathPremiumCalcService service)
        {
            _service = service;
        }
        /// <summary>
        /// get occupation details
        /// </summary>
        /// <returns>occupation list</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OccupationModel>>> BindOccupationList()
        {
            try
            {
                return await _service.BindOccupation();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        /// <summary>
        /// get calculated death premium
        /// </summary>
        /// <param name="calculationModel"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<DeathPremiumCalcResponseModel>> CalculateDeathPremium([FromBody] DeathPremiumRequestModel calculationModel)
        {
            try
            {
                decimal deathPremiumAmt = await _service.CalculatePremiumAmount(calculationModel);
                var model = new DeathPremiumCalcResponseModel()
                {
                    DeathPremium = deathPremiumAmt,
                    Status = "Success"
                };
                return model;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
