import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-checkbox-page',
  standalone: true,
  imports: [AtomicButton, AtomicCheckbox, AtomicDrawer, AtomicCodeBlock, FormsModule],
  templateUrl: './checkbox-page.html',
  styleUrl: './checkbox-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxPage {
  protected readonly basicCode = `<ango-checkbox label="Accept terms"></ango-checkbox>`;
  protected readonly checkedCode = `<ango-checkbox label="Checked" [checked]="true"></ango-checkbox>`;
  protected readonly disabledCode = `<ango-checkbox label="Disabled" [disabled]="true"></ango-checkbox>`;
  protected readonly indeterminateCode = `<ango-checkbox label="Indeterminate" [indeterminate]="true"></ango-checkbox>`;

  protected playgroundLabel = 'Playground checkbox';
  protected playgroundChecked = false;
  protected playgroundDisabled = false;
  protected playgroundIndeterminate = false;
  protected playgroundOpen = false;

  protected get playgroundCode() {
    const attrs: string[] = [`label="${this.playgroundLabel}"`];
    if (this.playgroundChecked) attrs.push(`[checked]="true"`);
    if (this.playgroundDisabled) attrs.push(`[disabled]="true"`);
    if (this.playgroundIndeterminate) attrs.push(`[indeterminate]="true"`);
    return `<ango-checkbox ${attrs.join(' ')}></ango-checkbox>`;
  }
}
