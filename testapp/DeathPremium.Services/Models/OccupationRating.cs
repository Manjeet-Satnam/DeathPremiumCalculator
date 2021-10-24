using System;
using System.Collections.Generic;
using System.Text;

namespace DeathPremium.Services.Models
{
    public class OccupationRating
    {
        decimal Profession = 1.0m;
        decimal WhiteCollar = 1.25m;
        decimal LightManual = 1.50m;
        decimal HeavyManual = 1.75m;


        public  decimal GetRating(string rating)
        {
            if (rating == "Profession")
                return Profession;
            else if (rating == "WhiteCollar")
                return WhiteCollar;
            else if (rating == "LightManual")
                return LightManual;
            else if (rating == "HeavyManual")
                return HeavyManual;
            else
                return 0;

        }
    }
}
