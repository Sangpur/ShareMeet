import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'maps',
        loadChildren: () => import('../pages/maps/maps.module').then(m => m.MapsPageModule)
      },
      {
        path: 'filter',
        loadChildren: () => import('../pages/maps/filter/filter.module').then(m => m.FilterPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../pages/newsfeed/newsfeed.module').then(m => m.NewsfeedPageModule)
      },
      {
        path: 'my-event',
        loadChildren: () => import('../pages/events/my-event/my-event.module').then(m => m.MyEventPageModule)
      },
      {
        path: 'new-event',
        loadChildren: () => import('../pages/events/new-event/new-event.module').then(m => m.NewEventPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../pages/events/events.module').then(m => m.EventsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/maps',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/maps',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
