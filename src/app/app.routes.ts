import { Routes } from '@angular/router';
import { AboutUsComponent } from './component/contenido/about-us/about-us.component';
import { AsoagropescanComponent } from './component/contenido/asoagropescan/asoagropescan.component';
import { ContactanosComponent } from './component/contenido/contactanos/contactanos.component';
import { InicioComponent } from './component/contenido/inicio/inicio.component';

export const routes: Routes = [

    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'Asoagropescan',
        component: AsoagropescanComponent
    },
    {
        path: 'AboutUs',
        component: AboutUsComponent
    },
    {
        path: 'Contactanos',
        component: ContactanosComponent
    }

];
