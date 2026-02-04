import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-design-system-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './design-system.html',
  styleUrl: './design-system.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemShell {
  protected readonly isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update(value => !value);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}
