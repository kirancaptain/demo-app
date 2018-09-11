import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatAutocompleteModule, MatToolbarModule,
  MatIconModule, MatInputModule,
  MatFormFieldModule, MatTooltipModule,
  MatSnackBarModule, MatCardModule, MatGridListModule, MatTabsModule, MatProgressBarModule,
   MatListModule, MatChipsModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule
} from '@angular/material';
@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule, MatAutocompleteModule, MatToolbarModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule, MatCardModule,
    MatGridListModule, MatTabsModule, MatProgressBarModule, MatListModule, MatChipsModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule, MatAutocompleteModule, MatToolbarModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule, MatCardModule,
    MatGridListModule, MatTabsModule,  MatProgressBarModule, MatListModule, MatChipsModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
