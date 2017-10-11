import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UserPackagingInfoComponent } from './component/user-packaging-info/user-packaging-info.component';
import { LoginComponent } from './component/login/login.component';
import { UserPackagingRegisterComponent } from './component/user-packaging-register/user-packaging-register.component';
import { UserPackagingProductListComponent } from './component/user-packaging-product-list/user-packaging-product-list.component';
      import { ProductListComponent } from './component/user-packaging-product-list/product-list/product-list.component';
      import { ProductDataComponent } from './component/user-packaging-product-list/product-data/product-data.component';
import { UserPackagingProductCartComponent } from './component/user-packaging-product-cart/user-packaging-product-cart.component';
import { ProductSearchComponent } from './component/user-packaging-product-list/product-search/product-search.component';
import { CartComponent } from './shared/header/cart/cart.component'
import { AdminAuthGuardService } from './services/guards/admin-auth-guard.service';

import { RegisterComponent } from './component/register/register.component';
import { NotAuthGuard } from './services/guards/not-auth.guard';

const appRoutes: Routes = [
    { path: 'home', component: UserPackagingInfoComponent},
    { path: 'user-register',
      component: UserPackagingRegisterComponent,
      canActivate: [NotAuthGuard]
    },
    { path: 'list',
      component: UserPackagingProductListComponent
    },
    { path: 'cart',
      component: UserPackagingProductCartComponent,
      canActivate: [NotAuthGuard]
    },
    { path: 'admin-register', component: RegisterComponent},
    { path: 'login',
      component: LoginComponent,
      canActivate: [NotAuthGuard]
    },
    {
      path: 'admin',
      loadChildren: './admin-module/admin.module#AdminModule',
      canLoad: [AdminAuthGuardService]
    },
    { path: '',   redirectTo: '/list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const appRoutingComponent  = [PageNotFoundComponent,
                                    UserPackagingInfoComponent,
                                    UserPackagingRegisterComponent,
                                    LoginComponent,
                                    RegisterComponent,
                                    UserPackagingProductListComponent,
                                    ProductListComponent,
                                    ProductDataComponent,
                                    ProductSearchComponent,
                                    UserPackagingProductCartComponent,
                                    CartComponent]