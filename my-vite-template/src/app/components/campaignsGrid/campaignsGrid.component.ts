import { Component, HostListener } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'campaigns-grid',
  styleUrl: 'campaignsGrid.css',
  templateUrl: 'campaignsGrid.html',
  imports: [MatGridListModule],
})
export class CampaignsGrid {
  screenWidth: number = 1200; // Domyślna szerokość, np. na serwerze
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Jeśli jesteśmy w przeglądarce, ustaw początkową szerokość
    if (this.isBrowser) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.isBrowser) {
      this.screenWidth = (event.target as Window).innerWidth;
    }
  }

  getCols(): number {
    if (this.screenWidth > 1200) {
      return 4; // 4 kolumny na dużych ekranach
    } else if (this.screenWidth > 800) {
      return 3; // 3 kolumny na średnich ekranach
    } else if (this.screenWidth > 600) {
      return 2; // 2 kolumny na mniejszych ekranach
    } else {
      return 1; // 1 kolumna na bardzo małych ekranach
    }
  }
}
