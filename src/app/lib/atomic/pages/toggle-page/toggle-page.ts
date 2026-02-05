import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicToggle } from '../../atoms/toggle/toggle';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-toggle-page',
  standalone: true,
  imports: [
    AtomicButton,
    AtomicCheckbox,
    AtomicToggle,
    AtomicDrawer,
    AtomicCodeBlock,
    FormsModule,
  ],
  templateUrl: './toggle-page.html',
  styleUrl: './toggle-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TogglePage {
  protected readonly basicCode = `<ango-toggle label="Notifications"></ango-toggle>`;
  protected readonly checkedCode = `<ango-toggle label="Enabled" [checked]="true"></ango-toggle>`;
  protected readonly disabledCode = `<ango-toggle label="Disabled" [disabled]="true"></ango-toggle>`;

  protected playgroundOpen = false;
  protected playgroundLabel = 'Playground toggle';
  protected playgroundChecked = false;
  protected playgroundDisabled = false;

  protected get playgroundCode() {
    const attrs: string[] = [`label="${this.playgroundLabel}"`];
    if (this.playgroundChecked) attrs.push(`[checked]="true"`);
    if (this.playgroundDisabled) attrs.push(`[disabled]="true"`);
    return `<ango-toggle ${attrs.join(' ')}></ango-toggle>`;
  }
}
