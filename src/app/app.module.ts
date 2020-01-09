import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { MaterialModule } from "./material/material.module";
import { UserService } from "./services/user.service";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, UsersComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
