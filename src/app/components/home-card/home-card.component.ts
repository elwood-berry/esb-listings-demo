import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  // INPUT Properties
  @Input() address1 = '';
  @Input() address2 = '';
  @Input() bath = null;
  @Input() bed = null;
  @Input() broker = '';
  @Input() city = '';
  @Input() imgBroker = '';
  @Input() imgHome = '';
  @Input() likes = null;
  @Input() listingId = null;
  @Input() new = false;
  @Input() openHouseDate = '';
  @Input() price = null;
  @Input() sqft = null;
  @Input() sqftlot = null;
  @Input() state = '';
  @Input() status = [];
  @Input() url = '';
  @Input() zip = null;

  @Input() miles = null;

  constructor() {}

  ngOnInit() {}
}
