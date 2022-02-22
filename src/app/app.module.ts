import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
import { NewparentComponent } from './newparent/newparent.component';
import { NewchildComponent } from './newchild/newchild.component';
import { ParentformComponent } from './component/parentform/parentform.component';
import { ChildformComponent } from './component/childform/childform.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChildBackendComponent } from './components/child-backend/child-backend.component';
import { ParentbackendComponent } from './components/parentbackend/parentbackend.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NewparentComponent,
    NewchildComponent,
    ParentformComponent,
    ChildformComponent,
    ChildBackendComponent,
    ParentbackendComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule, NgbModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
