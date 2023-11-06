import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    loadChildren: () => import('./view/weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'weather-details/:id',
    loadChildren: () => import('./view/weather-details/weather-details.module').then( m => m.WeatherDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
