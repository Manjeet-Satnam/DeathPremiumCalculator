import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeathPremiumService } from '../services/death-premium.service';
import { OccupationRatingModel } from '../models/occupation-rating.model';
import { DeathPremiumModel } from '../models/death-premium.model';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-death-premium',
  templateUrl: './death-premium.component.html'
})
export class DeathPremiumComponent implements OnInit {
  private _service;
  premiumAmount =0;
  errorMessage: any;
  data: any[];
  errormsg: any;
  occupationList: any;
  constructor(service: DeathPremiumService) {
    this._service = service;
  }

  //get age from the date of birth function

  public age: number;
  calculateAge(event) {
    if (event.value) {
      var timeDiff = Math.abs(Date.now() - new Date(event.value).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

//get occupation list from API using function fetchOccupation()

  fetchOccupation() {

    this._service.GetOccupationList().subscribe(
      list => {
        this.errorMessage = "";
        this.occupationList = list.body
        if (list.body.length == 0) {
          this.errorMessage = "";
          this.errorMessage = "Records not found!";
        }
      },
      error => this.errorMessage = <any>error
    );
  }
  //send input values to api using service

  CalcDeathPremium(ob: any) {
    var msg = this.getErrorMessage();
    if (msg != "") {
      this.errormsg = msg;
      return;
    }
    let obj = {} as DeathPremiumModel
    obj.Name = this.Name.value;
    obj.Age = this.Age.value;
    obj.DOB = this.DOB.value;
    obj.DeathSumInsured = this.SumInsured.value;
    obj.Occupation = ob.value;
    this._service.GetDeathPremiumamount(obj).subscribe(
      premium => {
        this.premiumAmount = premium.deathPremium;
        if (premium.deathPremium.body.length == 0) { }
        this.errorMessage = "";
        this.errorMessage = "There is some internal error, Please contact with admin!";
      },
      error => this.errorMessage = <any>error
    );
  }

  // required validations for input value

  Name = new FormControl('', [Validators.required]);
  Age = new FormControl('', [Validators.required]);
  DOB = new FormControl('', [Validators.required]);
  SumInsured = new FormControl('', [Validators.required]);
  Occupation = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.Name.hasError('required') ? 'You must enter Name' :
      this.Age.hasError('required') ? 'You must enter Age' :
        this.DOB.hasError('required') ? 'You must enter Date of Birth' :
          this.SumInsured.hasError('required') ? 'You must enter Death Sum Insured Amount' :
            this.Occupation.hasError('required') ? 'You must select Occupation' :
              '';

    //  if (this.Name.hasError('required')) {
    //    return 'You must enter Name';
    //  }
    //  else if (this.Age.hasError('required')) {
    //    return 'You must enter Age';
    //  }
    //  else if (this.DOB.hasError('required')) {
    //    return 'You must enter Date of Birth';
    //  }
    //  else if (this.SumInsured.hasError('required')) {
    //    return 'You must enter Death Sum Insured Amount';
    //  }
    //  else if (this.Occupation.hasError('required')) {
    //    return 'You must select Occupation';
    //  }
  }
  ngOnInit() {
    this.fetchOccupation();
  }

}
