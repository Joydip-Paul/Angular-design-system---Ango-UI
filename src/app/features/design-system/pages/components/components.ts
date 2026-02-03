import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AtomicButton } from '../../../../lib/atomic/atoms/button/button';
import { AtomicInput } from '../../../../lib/atomic/atoms/input/input';
import { AtomicFormField } from '../../../../lib/atomic/molecules/form-field/form-field';
import { AtomicSignInCard } from '../../../../lib/atomic/organisms/sign-in-card/sign-in-card';
import { AtomicCodeBlock } from '../../../../lib/atomic/utils/copy/code-block/code-block';

@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [
    AtomicButton,
    AtomicInput,
    AtomicFormField,
    AtomicSignInCard,
    AtomicCodeBlock,
  ],
  templateUrl: './components.html',
  styleUrl: './components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsPage {
  protected readonly buttonCode = `<ango-button label="Primary Button"></ango-button>`;

  protected readonly inputCode = `<ango-input placeholder="Your email"></ango-input>`;

  protected readonly formFieldCode = `
<ango-form-field
  label="Email"
  placeholder="you@example.com"
></ango-form-field>
`.trim();

  protected readonly signInCardCode = `
<ango-signin-card
  title="Sign in"
  subtitle="Use your company email"
></ango-signin-card>
`.trim();
}
