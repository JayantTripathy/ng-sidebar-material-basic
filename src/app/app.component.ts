import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MatToolbarModule,MatSidenavModule, 
    MatIconModule, MatDivider, MatNavList, MatListItem, MatExpansionModule, RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'ng-sidebar-material';
  constructor(private observer: BreakpointObserver, private router: Router) {}
  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
    this.router.events
    .pipe(
      untilDestroyed(this),
      filter((e) => e instanceof NavigationEnd)
    )
    .subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });
  }
}
