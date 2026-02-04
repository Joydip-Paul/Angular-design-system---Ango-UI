import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-select-page',
  standalone: true,
  imports: [AtomicSelect, AtomicCheckbox, AtomicCodeBlock, FormsModule],
  templateUrl: './select-page.html',
  styleUrl: './select-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPage {
  protected readonly options: AtomicSelectOption[] = [
    { label: 'Starter', value: 'starter' },
    { label: 'Growth', value: 'growth' },
    { label: 'Enterprise', value: 'enterprise' },
  ];

  protected readonly basicCode = `
<ango-select
  label="Plan"
  placeholder="Choose a plan"
  [options]="options"
></ango-select>
`.trim();

  protected readonly valueCode = `
<ango-select
  label="Plan"
  [options]="options"
  value="growth"
></ango-select>
`.trim();

  protected readonly disabledCode = `
<ango-select
  label="Plan"
  [options]="options"
  [disabled]="true"
></ango-select>
`.trim();

  protected playgroundValue = '';
  protected playgroundDisabled = false;
  protected playgroundLabel = 'Plan';
  protected playgroundPlaceholder = 'Choose a plan';
  protected readonly valueOptions: AtomicSelectOption[] = [
    { label: '(none)', value: '' },
    { label: 'Starter', value: 'starter' },
    { label: 'Growth', value: 'growth' },
    { label: 'Enterprise', value: 'enterprise' },
  ];

  protected get playgroundCode() {
    const attrs: string[] = [
      `label="${this.playgroundLabel}"`,
      `placeholder="${this.playgroundPlaceholder}"`,
      `[options]="options"`,
    ];
    if (this.playgroundValue) attrs.push(`value="${this.playgroundValue}"`);
    if (this.playgroundDisabled) attrs.push(`[disabled]="true"`);
    return `<ango-select ${attrs.join(' ')}></ango-select>`;
  }
}
