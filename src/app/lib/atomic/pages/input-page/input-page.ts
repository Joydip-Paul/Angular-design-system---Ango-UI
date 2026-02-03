import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AtomicInput } from '../../atoms/input/input';
import { AtomicFormField } from '../../molecules/form-field/form-field';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-input-page',
  standalone: true,
  imports: [AtomicInput, AtomicFormField, AtomicCodeBlock],
  templateUrl: './input-page.html',
  styleUrl: './input-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPage {
  protected readonly inputTextCode = `<ango-input placeholder="Type something"></ango-input>`;
  protected readonly inputEmailCode = `<ango-input type="email" placeholder="name@company.com"></ango-input>`;
  protected readonly inputPasswordCode = `<ango-input type="password" placeholder="••••••••"></ango-input>`;
  protected readonly inputDisabledCode = `<ango-input placeholder="Disabled" [disabled]="true"></ango-input>`;
  protected readonly formFieldCode = `
<ango-form-field
  label="Email"
  placeholder="you@example.com"
  type="email"
></ango-form-field>
`.trim();
}
