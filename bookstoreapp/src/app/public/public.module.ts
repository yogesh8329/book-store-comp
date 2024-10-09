import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllbooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
