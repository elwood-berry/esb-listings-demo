/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component, Input } from '@angular/core';

// SERVICE
import { ListingsService } from './services/listings/listings.service';

// DECORATOR: Component
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// CLASS: App
export class AppComponent {
  // INPUT PROPERTIES
  @Input() checked;

  // PROPERTIES.
  public listings: string = 'assets/data/listings/listings.json';
  public jsonListings; // LISTINGS FROM JSON ARRAY
  public listingCount: number; // DEFINE THE LENGHT OF THE ARRAY
  public currentListing = 0;
  public miles: number;

  // CONSTRUCTOR
  constructor(private json: ListingsService) {
    // JSON: LISTINGS
    json.getData(this.listings).subscribe(result => {
      // console.log('Listings Data', result);
      this.listingCount = result.length;
      this.jsonListings = result;
      // console.log('JSON Listings', this.jsonListings);
    });
  }

  // CUSTOM PIPE METHOD.
  public onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  /* 
  IS CHECKED?  
  Using Material Component 'mat-button-toggle'.
  Method that checks to see if what page we are on.
  If we are on THIS page 'checked' is TRUE. If not 'checked' is FALSE
  */
  public open(value) {
    // console.log("Value In", value)
    if (this.currentListing === value) {
      return true;
    } else {
      return false;
    }
  }

  // IS DISABLED?
  public disabledPrevious(value) {
    if (value === 0) {
      return true;
    } else {
      return false;
    }
  }

  public disabledNext(value) {
    if (value === this.listingCount - 1) {
      return true;
    } else {
      return false;
    }
  }

  // CURRENT LISTING
  // Update the current listing.
  public toggleClick(value) {
    console.log('Current Listing', value);
    this.currentListing = value;
  }
}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
