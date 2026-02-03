import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicFormField } from '../../molecules/form-field/form-field';

@Component({
  selector: 'ango-signin-card',
  standalone: true,
  imports: [AtomicButton, AtomicFormField],
  templateUrl: './sign-in-card.html',
  styleUrl: './sign-in-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicSignInCard {
  @Input() title = 'Sign in';
  @Input() subtitle = 'Welcome back';
}
