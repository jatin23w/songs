import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BCPcomponent } from './BCP/BCP.component';
import { Peoplecomponent } from './People/People.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BCPcomponent,
    Peoplecomponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexmonsterPivotModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
