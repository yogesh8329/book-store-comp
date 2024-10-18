import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NotfoundComponent],  // Declare your NotfoundComponent
  imports: [CommonModule,AppRoutingModule],
  exports: [NotfoundComponent]  // Export NotfoundComponent so it can be used in other modules
})
export class SharedModule { }
