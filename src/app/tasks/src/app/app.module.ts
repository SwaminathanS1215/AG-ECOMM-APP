import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRouterModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
