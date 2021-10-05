import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { DealerRoutingModule } from './dealer-routing.module';
import { DealerComponent } from './dealer.component';
import { CardHolderComponent } from './card-holder/card-holder.component';


@NgModule({
  declarations: [
    DealerComponent,
    CardHolderComponent
  ],
  imports: [
    CommonModule,
    DealerRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class DealerModule { }
