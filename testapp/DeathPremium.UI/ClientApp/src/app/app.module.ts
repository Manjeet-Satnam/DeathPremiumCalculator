import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from "@angular/material/core";
import { MatLineModule } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DemoMaterialModule } from "../material-module";
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DeathPremiumComponent } from './death-premium/death-premium.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeathPremiumService } from './services/death-premium.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DeathPremiumComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatLineModule,
    DemoMaterialModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/death-premium', pathMatch: 'full' },
      { path: 'death-premium', component: DeathPremiumComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [DeathPremiumService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
