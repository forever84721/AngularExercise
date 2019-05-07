import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Page/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TablesComponent } from './Page/tables/tables.component';
import { TableSelecterComponent } from './Component/table-selecter/table-selecter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from './Component/table/table.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TableService } from './Service/table.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablesComponent,
    TableSelecterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [
    TableService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
