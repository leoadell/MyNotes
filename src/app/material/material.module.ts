import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
  ],
  declarations: []
})
export class MaterialModule { }
