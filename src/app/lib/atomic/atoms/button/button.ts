import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ango-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicButton {
  @Input() label = 'Button';
  @Input() variant: 'primary' | 'ghost' = 'primary';
  @Input() disabled = false;
  @Input() radius?: string;
  @Input() fontSize?: string;
  @Input() background?: string;
  @Input() loading = false;
}
