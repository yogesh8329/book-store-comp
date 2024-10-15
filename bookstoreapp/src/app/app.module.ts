import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import your routing module
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    AuthModule,
    UserModule,
    PublicModule // Ensure AppRoutingModule is imported here
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
