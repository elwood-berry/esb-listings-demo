import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeCardComponent } from './components/home-card/home-card.component';

// PIPES
import { ConvertPipe } from './pipes/convert/convert.pipe';

// SERVICES
import { ListingsService } from './services/listings/listings.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialLibraryModule,
    FlexLayoutModule
  ],
  declarations: [AppComponent, HomeCardComponent, ConvertPipe],
  bootstrap: [AppComponent],
  providers: [ListingsService]
})
export class AppModule {}
