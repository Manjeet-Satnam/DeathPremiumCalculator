using System;
using System.Collections.Generic;
using System.Text;

namespace DeathPremium.Services.Models
{
   public class DeathPremiumRequestModel
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public DateTime? DOB { get; set; }
        public string Occupation { get; set; }
        public decimal DeathSumInsured { get; set; }
    }
}
