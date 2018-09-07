import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PredictionTableComponent } from './prediction-table/prediction-table.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'prediction',
        component: PredictionTableComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
