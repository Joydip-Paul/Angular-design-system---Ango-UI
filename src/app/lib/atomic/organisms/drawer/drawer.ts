import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ango-drawer',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicDrawer implements OnChanges, OnDestroy {
  @Input() open = false;
  @Input() title = 'Drawer';
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'right';
  @Input() size: 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() closeOnOverlay = true;
  @Input() showClose = true;

  @Output() closed = new EventEmitter<void>();

  private scrollLocked = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  close() {
    this.closed.emit();
  }

  onOverlayClick() {
    if (this.closeOnOverlay) {
      this.close();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open']) {
      this.toggleScrollLock(this.open);
    }
  }

  ngOnDestroy() {
    this.toggleScrollLock(false);
  }

  private toggleScrollLock(lock: boolean) {
    if (lock && !this.scrollLocked) {
      this.document.body.style.overflow = 'hidden';
      this.scrollLocked = true;
    } else if (!lock && this.scrollLocked) {
      this.document.body.style.overflow = '';
      this.scrollLocked = false;
    }
  }
}
