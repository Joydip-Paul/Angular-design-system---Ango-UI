import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicRadio } from '../../atoms/radio/radio';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-radio-page',
  standalone: true,
  imports: [AtomicButton, AtomicRadio, AtomicCheckbox, AtomicDrawer, AtomicCodeBlock, FormsModule],
  templateUrl: './radio-page.html',
  styleUrl: './radio-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioPage {
  protected readonly basicCode = `<ango-radio name="role" label="User" value="user"></ango-radio>`;
  protected readonly checkedCode = `<ango-radio name="role" label="Admin" value="admin" [checked]="true"></ango-radio>`;
  protected readonly disabledCode = `<ango-radio name="role" label="Disabled" value="disabled" [disabled]="true"></ango-radio>`;

  protected playgroundLabel = 'Playground';
  protected playgroundName = 'plan';
  protected playgroundValue = 'starter';
  protected playgroundChecked = false;
  protected playgroundDisabled = false;
  protected playgroundOpen = false;

  protected get playgroundCode() {
    const attrs: string[] = [
      `name="${this.playgroundName}"`,
      `label="${this.playgroundLabel}"`,
      `value="${this.playgroundValue}"`,
    ];
    if (this.playgroundChecked) attrs.push(`[checked]="true"`);
    if (this.playgroundDisabled) attrs.push(`[disabled]="true"`);
    return `<ango-radio ${attrs.join(' ')}></ango-radio>`;
  }
}
