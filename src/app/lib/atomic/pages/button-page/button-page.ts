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
}
