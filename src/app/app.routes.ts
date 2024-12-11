import { Routes } from '@angular/router';
import { HomeComponent } from './models/home/home.component';
import { AboutUsComponent } from './models/about-us/about-us.component';
import { ProductComponent } from './models/product/product.component';
import { NotFoundComponent } from './models/not-found/not-found.component';
import { VisionComponent } from './models/vision/vision.component';
import { ValuesComponent } from './models/values/values.component';
import { DetailsComponent } from './models/details/details.component';
import { LoginComponent } from './models/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './models/add-product/add-product.component';
import { RegisterComponent } from './models/register/register.component';

export const routes: Routes = [
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:'Home',component:HomeComponent},
    {path:'AddProduct',component:AddProductComponent},
    {path:'About',component:AboutUsComponent,
        children:[
            {path:'',redirectTo:'Values',pathMatch:'full'},
            {path:'Vision',component:VisionComponent},
            {path:'Values',component:ValuesComponent}
        ]
    },
    {path:'Products',loadComponent:()=>import('./models/product/product.component')
        .then((obj)=>obj.ProductComponent),canActivate:[authGuard]},
    {path:'Details/:id',component:DetailsComponent},
    {path:'**',component:NotFoundComponent}
];
