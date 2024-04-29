import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyCompanyComponent } from './my-company/my-company.component';
import { MyDocumentComponent } from './my-document/my-document.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyInboxComponent } from './my-inbox/my-inbox.component';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { MediaComponent } from './media/media.component';
import { SupportComponent } from './support/support.component';
import { ProductComponent } from './product/product.component';
import { ApplicationComponent } from './application/application.component';
import { EmsComponent } from './ems/ems.component';
import { HyveComponent } from './hyve/hyve.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'my-company', component: MyCompanyComponent },
    { path: 'my-project', component: MyProjectComponent },
    { path: 'my-document', component: MyDocumentComponent },
    { path: 'my-inbox', component: MyInboxComponent },
    { path: 'use-cases', component: UseCasesComponent },
    { path: 'media', component: MediaComponent },
    { path: 'support', component: SupportComponent },
    { path: 'producuts', component: ProductComponent },
    { path: 'applications', component: ApplicationComponent },
    { path: 'ems', component: EmsComponent },
    { path: 'hyve', component: HyveComponent },
    // { path: '**', redirectTo: 'not-found' }
];
