import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ango-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicButton {
  @Input() label = 'Button';
  @Input() variant: 'primary' | 'ghost' = 'primary';
}
