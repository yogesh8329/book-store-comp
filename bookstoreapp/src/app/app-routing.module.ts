import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  // Default route redirects to about-us
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {
    path: 'auth',component:AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'user/:userid',component:UserComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  { path: '**', component: NotfoundComponent },
  // Wildcard route for handling 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
