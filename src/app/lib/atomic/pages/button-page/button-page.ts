import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [AtomicButton, AtomicCodeBlock, FormsModule],
  templateUrl: './button-page.html',
  styleUrl: './button-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPage {
  protected readonly primaryCode = `<ango-button label="Primary Button"></ango-button>`;
  protected readonly ghostCode = `<ango-button label="Ghost Button" variant="ghost"></ango-button>`;
  protected readonly disabledCode = `<ango-button label="Disabled" [disabled]="true"></ango-button>`;
  protected readonly radiusCode = `<ango-button label="Soft Radius" radius="5px"></ango-button>`;
  protected readonly fontSizeCode = `<ango-button label="Large Text" fontSize="1.1rem"></ango-button>`;
  protected readonly backgroundCode = `<ango-button label="Brand" background="#ff7a18"></ango-button>`;
  protected readonly loadingCode = `<ango-button label="Loading" [loading]="true"></ango-button>`;

  protected playgroundLabel = 'Playground';
  protected playgroundVariant: 'primary' | 'ghost' = 'primary';
  protected playgroundRadius = '18px';
  protected playgroundFontSize = '1rem';
  protected playgroundBackground = '#0f172a';
  protected playgroundLoading = false;
  protected playgroundDisabled = false;

  protected get playgroundCode() {
    const attrs: string[] = [`label="${this.playgroundLabel}"`];

    if (this.playgroundVariant === 'ghost') {
      attrs.push(`variant="ghost"`);
    }
    if (this.playgroundRadius) {
      attrs.push(`radius="${this.playgroundRadius}"`);
    }
    if (this.playgroundFontSize) {
      attrs.push(`fontSize="${this.playgroundFontSize}"`);
    }
    if (this.playgroundBackground) {
      attrs.push(`background="${this.playgroundBackground}"`);
    }
    if (this.playgroundLoading) {
      attrs.push(`[loading]="true"`);
    }
    if (this.playgroundDisabled) {
      attrs.push(`[disabled]="true"`);
    }

    return `<ango-button ${attrs.join(' ')}></ango-button>`;
  }
}
