import { Route } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';

export const ROUTES: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'listing', component: TodoListComponent }
];
