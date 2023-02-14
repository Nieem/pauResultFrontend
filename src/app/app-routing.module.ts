import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
     // { path: '', component:LoginComponent},
     { path: 'dashboard', redirectTo: 'layout', pathMatch: 'full' },
     { path: 'studentdashboard', redirectTo: 'layout/studentdashboard', pathMatch: 'full' },
     { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'layout', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
     { path: 'layout/studentdashboard', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },

   // { path: 'dashboard', loadChildren: './layout/dashboard/dashboard.module#DashboardModule' },
     { path: 'login', loadChildren: './login/login.module#LoginModule' },
     { path: 'sm', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
//export const routingComponent=[LoginComponent]