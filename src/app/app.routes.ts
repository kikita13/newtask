import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
  {
    path: 'map',
    title: 'Карта',
    component: MapComponent,
  },
  {
    path: 'schedule',
    title: 'Расписание',
    component: ScheduleComponent,
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];
