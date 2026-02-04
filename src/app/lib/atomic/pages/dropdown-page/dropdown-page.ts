import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicDropdown, AtomicDropdownItem } from '../../atoms/dropdown/dropdown';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-dropdown-page',
  standalone: true,
  imports: [AtomicDropdown, AtomicCheckbox, AtomicSelect, AtomicCodeBlock, FormsModule],
  templateUrl: './dropdown-page.html',
  styleUrl: './dropdown-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownPage {
  protected readonly items: AtomicDropdownItem[] = [
    { label: 'Profile', value: 'profile' },
    { label: 'Billing', value: 'billing' },
    { label: 'Security', value: 'security' },
  ];

  protected readonly basicCode = `
<ango-dropdown
  label="Menu"
  placeholder="Select item"
  [items]="items"
></ango-dropdown>
`.trim();

  protected readonly selectedCode = `
<ango-dropdown
  label="Menu"
  [items]="items"
  selected="billing"
></ango-dropdown>
`.trim();

  protected readonly disabledCode = `
<ango-dropdown
  label="Menu"
  [items]="items"
  [disabled]="true"
></ango-dropdown>
`.trim();

  protected readonly hoverCode = `
<ango-dropdown
  label="Menu"
  [items]="items"
  [openOnHover]="true"
></ango-dropdown>
`.trim();

  protected playgroundLabel = 'Menu';
  protected playgroundPlaceholder = 'Select item';
  protected playgroundSelected = '';
  protected playgroundDisabled = false;
  protected playgroundHover = false;

  protected readonly selectedOptions: AtomicSelectOption[] = [
    { label: '(none)', value: '' },
    { label: 'Profile', value: 'profile' },
    { label: 'Billing', value: 'billing' },
    { label: 'Security', value: 'security' },
  ];

  protected get playgroundCode() {
    const attrs: string[] = [
      `label="${this.playgroundLabel}"`,
      `placeholder="${this.playgroundPlaceholder}"`,
      `[items]="items"`,
    ];
    if (this.playgroundSelected) attrs.push(`selected="${this.playgroundSelected}"`);
    if (this.playgroundHover) attrs.push(`[openOnHover]="true"`);
    if (this.playgroundDisabled) attrs.push(`[disabled]="true"`);
    return `<ango-dropdown ${attrs.join(' ')}></ango-dropdown>`;
  }
}
