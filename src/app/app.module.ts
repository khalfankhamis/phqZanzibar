import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegionComponent } from './pages/region/region.component';
import { RankComponent } from './pages/rank/rank.component';
import { EducationComponent } from './pages/education/education.component';
import { RankListComponent } from './pages/rank-list/rank-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RankUpdateComponent } from './pages/rank-update/rank-update.component';
import { RegionListComponent } from './pages/region-list/region-list.component';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { RegionUpdateComponent } from './pages/region-update/region-update.component';
import { EducationUpdateComponent } from './pages/education-update/education-update.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DashboardComponent,
    RegionComponent,
    RankComponent,
    EducationComponent,
    RankListComponent,
    RankUpdateComponent,
    RegionListComponent,
    EducationListComponent,
    RegionUpdateComponent,
    EducationUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
