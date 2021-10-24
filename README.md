# DeathPremiumCalculator

Note: Please check project inside the Testapp folder(download Testapp folder).

<h2>About Technology and folder structure</h2><br>

Open Solution with Visual studio 2019.<br/>
There are four projects in the solution.<br/>
1. UI<br/>
2. API<br/>
3. Service<br/>
4. MSUnitTest<br/>
UI is using Angular 8.<br/>
API is using .net core 5.0.<br/>
MSUnitTesting is used for test the code.<br/>
Calculation login is on the Service Layer inside the service folder.<br/>
Choose solution as multiple startup Project ( API Project and UI Project).<br/>

Angular page code url is below.
testapp/DeathPremium.UI/ClientApp/src/app/death-premium.

Calculator page in inside the folder "death-premium".

<h3>Functionality</h3><br/>
1. Bind Occupation Dropdownlist from API.<br/>
2. Bind Age on the change of DOB.<br/>
3. Get DeathPremiumAmount on the Dropdown Select event and show on the page.<br/>

