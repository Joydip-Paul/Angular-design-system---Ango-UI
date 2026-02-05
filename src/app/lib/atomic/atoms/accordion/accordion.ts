import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ango-accordion',
  standalone: true,
  imports: [NgIf],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicAccordion {
  @Input() title = 'Accordion';
  @Input() open = false;
  @Input() disabled = false;
  @Input() icon?: string;

  @Output() openChange = new EventEmitter<boolean>();

  toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}
