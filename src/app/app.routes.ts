import { Routes } from '@angular/router';
import { EmpeladoListComponent } from './components/empelado-list/empelado-list.component';

export const routes: Routes = [
    { path: '', component:EmpeladoListComponent },
    { path: '**', redirectTo: ''}
];
