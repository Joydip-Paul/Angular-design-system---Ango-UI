import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [AtomicButton, AtomicCodeBlock],
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
}
