import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'ango-modal',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicModal {
  @Input() open = false;
  @Input() title = 'Modal title';
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
