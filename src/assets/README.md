


# Legacy Code Segments 

## Pagnation 2021.07.22  
```html  
  <mat-button-toggle 
  value=""
  [ngClass]="{ 'mat-button-toggle-checked' : i === currentListing }"
    *ngFor="let listing of jsonListings; let i = index">
    {{ i +1 }}
  </mat-button-toggle>

  <mat-button-toggle>Option 1</mat-button-toggle>
  <mat-button-toggle checked="true">Option 2</mat-button-toggle>
```


## Data Binding v.1 2021.07.22 
```html  
<app-home-card [address1]="sampleListings[0].address1" [address2]="sampleListings[0].address2"
  [bath]="sampleListings[0].bath" [bed]="sampleListings[0].bed" [broker]="sampleListings[0].broker"
  [city]="sampleListings[0].city" [imgBroker]="sampleListings[0].imgBroker[0].url"
  [imgHome]="sampleListings[0].imgHome[0].url" [likes]="sampleListings[0].likes"
  [listingId]="sampleListings[0].listingId" [new]="sampleListings[0].new"
  [openHouseDate]="sampleListings[0].openHouseDate" [price]="sampleListings[0].price" [sqft]="sampleListings[0].sqft"
  [sqftlot]="sampleListings[0].sqftlot" [state]="sampleListings[0].state[0].abbrv" [status]="sampleListings[0].status"
  [url]="sampleListings[0].url" [zip]="sampleListings[0].zip"></app-home-card>
```


## Data Binding v.2 2021.07.22 
```html  
<app-home-card *ngFor="let listing of sampleListings" [address1]="listing.address1" [address2]="listing.address2"
  [bath]="listing.bath" [bed]="listing.bed" [broker]="listing.broker" [city]="listing.city"
  [imgBroker]="listing.imgBroker[0].url" [imgHome]="listing.imgHome[0].url" [likes]="listing.likes"
  [listingId]="listing.listingId" [new]="listing.new" [openHouseDate]="listing.openHouseDate" [price]="listing.price"
  [sqft]="listing.sqft" [sqftlot]="listing.sqftlot" [state]="listing.state[0].abbrv" [status]="listing.status"
  [url]="listing.url" [zip]="listing.zip" [miles]="listing.miles"></app-home-card>
```

## Sample Listing Array 2021.07.22  
```ts
  // SAMPLE LISTING
  public sampleListings = [
    // LISTING #1 -------------------------------------------
    {
      address1: '1000 Somewhere Dr.',
      address2: 'Suite 420',
      bath: 100,
      bed: 100,
      broker: 'big dawg realty broker, Inc.',
      city: 'Dallas',
      imgBroker: [
        {
          imgBrokerId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        }
      ],
      imgHome: [
        {
          imgHomeId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
        },
        {
          imgHomeId: 1,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
        }
      ],
      likes: 1,
      listingId: 0,
      new: true,
      openHouseDate: 'June, 12, 2021',
      price: 1000000.99,
      sqft: 10000,
      sqftlot: 10000,
      state: [
        {
          abbrv: 'TX',
          full: 'Texas'
        }
      ],
      status: ['For Sale'],
      url: 'www.domain.com',
      zip: 70000,
      miles: 43
    },

    // LISTING #2 -------------------------------------------
    {
      address1: '7985 Thistletree Ln',
      address2: '',
      bath: 2.5,
      bed: 4,
      broker: 'Fat Cat Realty',
      city: 'Frisco',
      imgBroker: [
        {
          imgBrokerId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        }
      ],
      imgHome: [
        {
          imgHomeId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/d15d9e27e1fac7c2f85810f41e8cae06l-m3511790724od-w480_h360.jpg'
        },
        {
          imgHomeId: 1,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
        }
      ],
      likes: 1,
      listingId: 1,
      new: true,
      openHouseDate: 'July, 19, 2021',
      price: 495000,
      sqft: 3069,
      sqftlot: 0.29,
      state: [
        {
          abbrv: 'TX',
          full: 'Texas'
        }
      ],
      status: ['For Sale'],
      url: 'www.domain.com',
      zip: 75033,
      miles: 21
    },

    // LISTING #3 -------------------------------------------
    {
      address1: '4136 Los Altos Dr',
      address2: '',
      bath: 3,
      bed: 4,
      broker: 'Supreme Broker',
      city: 'Plano',
      imgBroker: [
        {
          imgBrokerId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        }
      ],
      imgHome: [
        {
          imgHomeId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/a252277401d0237fd64b64f3ed330705l-m3438727031od-w480_h360.jpg'
        },
        {
          imgHomeId: 1,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
        }
      ],
      likes: 1,
      listingId: 0,
      new: true,
      openHouseDate: 'June, 12, 2021',
      price: 499000,
      sqft: 3095,
      sqftlot: 0.26,
      state: [
        {
          abbrv: 'TX',
          full: 'Texas'
        }
      ],
      status: ['For Sale'],
      url: 'www.domain.com',
      zip: 75024,
      miles: 7
    }
  ];  
```

## Data Binding 
```html    
<!-- 
  [version.03]
  LOCAL JSON DATA BINDING
-->
<app-home-card *ngFor="let listing of jsonListings" [address1]="listing.address1" [address2]="listing.address2"
  [bath]="listing.bath" [bed]="listing.bed" [broker]="listing.broker" [city]="listing.city"
  [imgBroker]="listing.imgBroker[0].url" [imgHome]="listing.imgHome[0].url" [likes]="listing.likes"
  [listingId]="listing.listingId" [new]="listing.new" [openHouseDate]="listing.openHouseDate" [price]="listing.price"
  [sqft]="listing.sqft" [sqftlot]="listing.sqftlot" [state]="listing.state[0].abbrv" [status]="listing.status"
  [url]="listing.url" [zip]="listing.zip" [miles]="listing.miles"></app-home-card>

```