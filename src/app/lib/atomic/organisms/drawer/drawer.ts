import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'ango-drawer',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicDrawer {
  @Input() open = false;
  @Input() title = 'Drawer';
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'right';
  @Input() size: 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() closeOnOverlay = true;
  @Input() showClose = true;

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  onOverlayClick() {
    if (this.closeOnOverlay) {
      this.close();
    }
  }
}
