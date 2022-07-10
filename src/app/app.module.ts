import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { MineService } from './Services/mine.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    ScrollViewModule,
  ],
  providers: [MineService],
  bootstrap: [AppComponent],

})
export class AppModule { }
