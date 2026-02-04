import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicInput } from '../../atoms/input/input';
import { AtomicFormField } from '../../molecules/form-field/form-field';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-input-page',
  standalone: true,
  imports: [
    AtomicButton,
    AtomicCheckbox,
    AtomicSelect,
    AtomicInput,
    AtomicFormField,
    AtomicDrawer,
    AtomicCodeBlock,
    FormsModule,
  ],
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

  protected playgroundOpen = false;
  protected playgroundPlaceholder = 'Your email';
  protected playgroundType: 'text' | 'email' | 'password' = 'text';
  protected playgroundDisabled = false;

  protected readonly typeOptions: AtomicSelectOption[] = [
    { label: 'Text', value: 'text' },
    { label: 'Email', value: 'email' },
    { label: 'Password', value: 'password' },
  ];

  setPlaygroundType(value: string) {
    if (value === 'text' || value === 'email' || value === 'password') {
      this.playgroundType = value;
    }
  }

  protected get playgroundCode() {
    const attrs: string[] = [
      `placeholder="${this.playgroundPlaceholder}"`,
      `type="${this.playgroundType}"`,
    ];
    if (this.playgroundDisabled) attrs.push(`[disabled]="true"`);
    return `<ango-input ${attrs.join(' ')}></ango-input>`;
  }
}
