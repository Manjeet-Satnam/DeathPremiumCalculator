using DeathPremium.Services.Interface;
using DeathPremium.Services.Models;
using DeathPremium.Services.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DeathPremiumUnitTest
{
    [TestClass]
    public class UnitTestDeathPremium
    {
        /// <summary>
        /// MSUnit Testing 
        /// Calculate Monthly Death Premium
        /// Pass Age,DeathSumInsured and occupation value then it will calculate Amount. 
        /// </summary>
   
        [TestMethod]
        public void CalculateDeathPremium()
        {
           // Arrange
            DeathPremiumCalcService _service = new DeathPremiumCalcService();
            DeathPremiumRequestModel model = new DeathPremiumRequestModel();
            model.Age = 45;
            model.DeathSumInsured = 2000;
            model.Occupation = "Profession";
            var DeathPremiumExpected = 1080m; 

            //Act
            var actualValue =  _service.CalculatePremiumAmount(model);

            //Assert
            Assert.AreEqual(DeathPremiumExpected, actualValue.Result);
        }
    }
}
