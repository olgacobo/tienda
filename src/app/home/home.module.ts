import { NgModule } from '@angular/core';
import { BannerComponent } from '../home/components/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    // componentes que va a tener este modulo
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule
    ]
})

export class HomeModule {

}