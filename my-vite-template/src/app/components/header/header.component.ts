import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCampaign } from '../addEditCampaign/addEditCampaign.component';

/**
 * @title header
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html',
  styleUrl: 'header.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class Header {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddEditCampaign, {
      width: '80%',
      data: {
        animal: '',
        name: '',
      },
    });
  }
}
