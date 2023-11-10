import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanListComponent } from './pages/fan-list/fan-list.component';
import { FanCreateComponent } from './pages/fan-create/fan-create.component';
import { FanDetailComponent } from './pages/fan-detail/fan-detail.component';
import { FanUpdateComponent } from './pages/fan-update/fan-update.component';

const routes: Routes = [
  { path: '', component: FanListComponent },
  { path: 'create', component: FanCreateComponent },
  { path: 'detail/:id', component: FanDetailComponent },
  { path: 'update/:id', component: FanUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
