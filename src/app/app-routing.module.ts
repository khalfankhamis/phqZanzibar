import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegionComponent } from './pages/region/region.component';
import { EducationComponent } from './pages/education/education.component';
import { RankComponent } from './pages/rank/rank.component';
import { RankListComponent } from './pages/rank-list/rank-list.component';
import { RankUpdateComponent } from './pages/rank-update/rank-update.component';
import { RegionListComponent } from './pages/region-list/region-list.component';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { RegionUpdateComponent } from './pages/region-update/region-update.component';
import { EducationUpdateComponent } from './pages/education-update/education-update.component';

const routes: Routes = [
  {path:"",
  component:MainLayoutComponent,
  children:
  [{
    path:"",
    component:DashboardComponent
  },
  {path:"region",
  component:RegionComponent

  },
  {path:"rank",
  component:RankComponent

  },
  {
    path:"education",
    component:EducationComponent
  },
  {
    path:"rank-list",
    component:RankListComponent
  },
  {
    path:"rank-update/:id",
    component:RankUpdateComponent
  },
  {
    path:'regionList',
    component:RegionListComponent
  },
  {
    path:"education-list",
    component:EducationListComponent
  },
  {
    path:"region-update/:region_id",
    component:RegionUpdateComponent
  },
  {
    path:"education-update/:id",
    component:EducationUpdateComponent
  }

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
