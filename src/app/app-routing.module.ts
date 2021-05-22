import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  //  dashboard
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    // canActivate: [AuthGuard],
  },

  //  auth
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },

  //  size
  {
    path: 'size',
    loadChildren: () => import('./size/size.module').then(m => m.SizeModule),
    // canActivate: [AuthGuard],
  },

  //  category
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
    // canActivate: [AuthGuard],
  },

  //  sub-category
  {
    path: 'sub-category',
    loadChildren: () => import('./sub-category/sub-category.module').then(m => m.SubCategoryModule),
    // canActivate: [AuthGuard],
  },

  //  importing
  {
    path: 'importing',
    loadChildren: () => import('./importing/importing.module').then(m => m.ImportingModule),
    // canActivate: [AuthGuard],
  },


  //  type
  {
    path: 'type',
    loadChildren: () => import('./type/type.module').then(m => m.TypeModule),
    // canActivate: [AuthGuard],
  },

  //  product
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    // canActivate: [AuthGuard],
  },


  //  customer
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    // canActivate: [AuthGuard],
  },


  //  salesman
  {
    path: 'salesman',
    loadChildren: () => import('./salesman/salesman.module').then(m => m.SalesmanModule),
    // canActivate: [AuthGuard],
  },


  //  task
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule),
    // canActivate: [AuthGuard],
  },

  //  role
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
    // canActivate: [AuthGuard],
  },

  //  order
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
    // canActivate: [AuthGuard],
  },


  //  configuration
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule),
    // canActivate: [AuthGuard],
  },

  //  cms
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
    // canActivate: [AuthGuard],
  },

  //  faq
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
    // canActivate: [AuthGuard],
  },


  //  site-image
  {
    path: 'site-image',
    loadChildren: () => import('./site-image/site-image.module').then(m => m.SiteImageModule),
    // canActivate: [AuthGuard],
  },


  // { path: '**', component: PageNotFoundComponent }
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
