import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-drawer-page',
  standalone: true,
  imports: [
    AtomicDrawer,
    AtomicButton,
    AtomicCheckbox,
    AtomicSelect,
    AtomicCodeBlock,
    FormsModule,
  ],
  templateUrl: './drawer-page.html',
  styleUrl: './drawer-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerPage {
  protected rightOpen = false;
  protected leftOpen = false;
  protected topOpen = false;
  protected bottomOpen = false;

  protected readonly rightCode = `
<ango-drawer [open]="isOpen" title="Right drawer" position="right">
  <p>Drawer content</p>
</ango-drawer>
`.trim();

  protected readonly leftCode = `
<ango-drawer [open]="isOpen" title="Left drawer" position="left">
  <p>Drawer content</p>
</ango-drawer>
`.trim();

  protected readonly topCode = `
<ango-drawer [open]="isOpen" title="Top drawer" position="top">
  <p>Drawer content</p>
</ango-drawer>
`.trim();

  protected readonly bottomCode = `
<ango-drawer [open]="isOpen" title="Bottom drawer" position="bottom">
  <p>Drawer content</p>
</ango-drawer>
`.trim();

  protected playgroundOpen = false;
  protected playgroundTitle = 'Playground drawer';
  protected playgroundPosition: 'left' | 'right' | 'top' | 'bottom' = 'right';
  protected playgroundSize: 'sm' | 'md' | 'lg' | 'full' = 'md';
  protected playgroundOverlayClose = true;
  protected playgroundShowClose = true;

  protected readonly positionOptions: AtomicSelectOption[] = [
    { label: 'Right', value: 'right' },
    { label: 'Left', value: 'left' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  protected readonly sizeOptions: AtomicSelectOption[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Full', value: 'full' },
  ];

  setPlaygroundPosition(value: string) {
    if (value === 'left' || value === 'right' || value === 'top' || value === 'bottom') {
      this.playgroundPosition = value;
    }
  }

  setPlaygroundSize(value: string) {
    if (value === 'sm' || value === 'md' || value === 'lg' || value === 'full') {
      this.playgroundSize = value;
    }
  }

  protected get playgroundCode() {
    const attrs: string[] = [
      `[open]="true"`,
      `title="${this.playgroundTitle}"`,
      `position="${this.playgroundPosition}"`,
      `size="${this.playgroundSize}"`,
      `[closeOnOverlay]="${this.playgroundOverlayClose}"`,
      `[showClose]="${this.playgroundShowClose}"`,
    ];
    return `<ango-drawer ${attrs.join(' ')}>
  <p>Drawer content</p>
</ango-drawer>`;
  }
}
