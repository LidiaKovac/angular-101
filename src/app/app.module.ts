import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { UserListComponent } from './user-list/user-list.component';
import { SingleUserComponent } from './single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    UserListComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
