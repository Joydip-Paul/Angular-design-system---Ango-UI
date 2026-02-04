import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicFormField } from '../../molecules/form-field/form-field';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-molecules-page',
  standalone: true,
  imports: [AtomicButton, AtomicSelect, AtomicFormField, AtomicDrawer, AtomicCodeBlock, FormsModule],
  templateUrl: './molecules-page.html',
  styleUrl: './molecules-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesPage {
  protected readonly formFieldCode = `
<ango-form-field
  label="Email"
  placeholder="you@example.com"
  type="email"
></ango-form-field>
`.trim();

  protected playgroundOpen = false;
  protected playgroundLabel = 'Email';
  protected playgroundPlaceholder = 'you@example.com';
  protected playgroundType: 'text' | 'email' | 'password' = 'email';

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
    return `<ango-form-field
  label="${this.playgroundLabel}"
  placeholder="${this.playgroundPlaceholder}"
  type="${this.playgroundType}"
></ango-form-field>`;
  }
}
