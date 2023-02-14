import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            
            { path: '', redirectTo: 'dashboard' },
            { path: 'studentdashboard', redirectTo: 'studentdashboard' },

            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'studentdashboard', loadChildren: './student-dashboard/studentdashboard.module#StudentdashboardModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
             { path: 'forms', loadChildren: './form/form.module#FormModule' },
             { path: 'studentProfile', loadChildren: './student-profile/student-profile.module#StudentProfileModule' },
            { path: 'resetpassword', loadChildren: './resetpassword/resetpassword.module#ResetpasswordModule' },

            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            // { path: 'testform', loadChildren: './testform/testform.module#TestformModule' },
            // { path: 'form1',  loadChildren: './form1/form.module#FormModule' },
           
            { path: 'sections',  loadChildren: './sections/sections.module#SectionsModule' },
           // { path: 'sectiondetails/:id', redirectTo: '/superhero/:id' },
            { path: 'sectiondetails/:id/:id1/:id2/:id3/:id4',  loadChildren: './section-details/section-details.module#SectionDetailsModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
