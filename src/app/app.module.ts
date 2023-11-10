import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FanListComponent } from './pages/fan-list/fan-list.component';
import { FanDetailComponent } from './pages/fan-detail/fan-detail.component';
import { FanUpdateComponent } from './pages/fan-update/fan-update.component';
import { FanCreateComponent } from './pages/fan-create/fan-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FanListComponent,
    FanDetailComponent,
    FanUpdateComponent,
    FanCreateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
