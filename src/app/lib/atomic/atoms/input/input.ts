import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ango-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicInput {
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
}
