using DeathPremium.Services.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeathPremium.API.Validator
{
    public class DeathPremiumCalcValidator:AbstractValidator<DeathPremiumRequestModel>
    {
        public DeathPremiumCalcValidator()
        {
            RuleFor(o => o.Name).NotEmpty();
            RuleFor(o => o.Age).NotEmpty();
            RuleFor(o => o.DOB).NotEmpty();
            RuleFor(o => o.Occupation).NotEmpty();
            RuleFor(o => o.DeathSumInsured).NotEmpty();
        }
    }
}
