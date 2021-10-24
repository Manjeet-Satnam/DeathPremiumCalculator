using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeathPremium.Services.Models
{
    public class ApiException : Exception
    {
        public int HttpStatusCode { get; set; }

        public ApiException(string message)
            : base(message)
        {
            HttpStatusCode = (int)System.Net.HttpStatusCode.InternalServerError;
        }
    }
}
