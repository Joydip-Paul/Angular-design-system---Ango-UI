import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AtomicInput } from '../../atoms/input/input';

@Component({
  selector: 'ango-form-field',
  standalone: true,
  imports: [AtomicInput],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicFormField {
  @Input() label = 'Label';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
}
