import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * @title header
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html',
  styleUrl: 'header.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class Header {}
