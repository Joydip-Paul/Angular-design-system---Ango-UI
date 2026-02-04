import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicModal } from '../../organisms/modal/modal';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-modal-page',
  standalone: true,
  imports: [
    AtomicModal,
    AtomicButton,
    AtomicCheckbox,
    AtomicSelect,
    AtomicDrawer,
    AtomicCodeBlock,
    FormsModule,
  ],
  templateUrl: './modal-page.html',
  styleUrl: './modal-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalPage {
  protected basicOpen = false;
  protected sizeOpen = false;
  protected actionOpen = false;

  protected readonly basicCode = `
<ango-modal [open]="isOpen" title="Welcome">
  <p>Modal content goes here.</p>
</ango-modal>
`.trim();

  protected readonly sizeCode = `
<ango-modal [open]="isOpen" title="Large modal" size="lg">
  <p>Wide layouts for dense content.</p>
</ango-modal>
`.trim();

  protected readonly actionCode = `
<ango-modal [open]="isOpen" title="Delete project" [closeOnOverlay]="false">
  <p modal-subtitle>Are you sure? This action cannot be undone.</p>
  <div modal-actions>
    <ango-button label="Cancel" variant="ghost"></ango-button>
    <ango-button label="Confirm"></ango-button>
  </div>
</ango-modal>
`.trim();

  protected playgroundDrawerOpen = false;
  protected playgroundModalOpen = false;
  protected playgroundTitle = 'Playground modal';
  protected playgroundSize: 'sm' | 'md' | 'lg' | 'full' = 'md';
  protected playgroundOverlayClose = true;
  protected playgroundShowClose = true;

  protected readonly sizeOptions: AtomicSelectOption[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Full', value: 'full' },
  ];

  setPlaygroundSize(value: string) {
    if (value === 'sm' || value === 'md' || value === 'lg' || value === 'full') {
      this.playgroundSize = value;
    }
  }

  protected get playgroundCode() {
    const attrs: string[] = [
      `[open]="true"`,
      `title="${this.playgroundTitle}"`,
      `size="${this.playgroundSize}"`,
      `[closeOnOverlay]="${this.playgroundOverlayClose}"`,
      `[showClose]="${this.playgroundShowClose}"`,
    ];
    return `<ango-modal ${attrs.join(' ')}>
  <p>Modal content goes here.</p>
  <div modal-actions>
    <ango-button label="Cancel" variant="ghost"></ango-button>
    <ango-button label="Confirm"></ango-button>
  </div>
</ango-modal>`;
  }
}
