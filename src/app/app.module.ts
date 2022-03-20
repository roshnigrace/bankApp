import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { DirectiveDirective } from './directive/directive.directive';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TransactionComponent,
    DeleteConfirmComponent,
    DirectiveDirective,
    AnimationDemoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                    //to add ngModule
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
