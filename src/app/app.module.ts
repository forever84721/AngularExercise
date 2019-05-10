import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Page/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TablesComponent } from './Page/tables/tables.component';
import { TableSelecterComponent } from './Component/table-selecter/table-selecter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from './Component/table/table.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TranslatePipe } from './Pipe/translate.pipe';
import { MainMenuComponent } from './Component/main-menu/main-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablesComponent,
    TableSelecterComponent,
    TableComponent,
    TranslatePipe,
    MainMenuComponent
  ],
  entryComponents: [MainMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
