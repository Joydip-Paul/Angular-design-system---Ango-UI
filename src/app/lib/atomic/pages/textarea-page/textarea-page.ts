import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicTextarea } from '../../atoms/textarea/textarea';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-textarea-page',
  standalone: true,
  imports: [
    AtomicButton,
    AtomicCheckbox,
    AtomicTextarea,
    AtomicDrawer,
    AtomicCodeBlock,
    FormsModule,
  ],
  templateUrl: './textarea-page.html',
  styleUrl: './textarea-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaPage {
  protected readonly basicCode = `<ango-textarea placeholder="Write a note..." [rows]="4"></ango-textarea>`;
  protected readonly colsCode = `<ango-textarea placeholder="Short note" [rows]="3" [cols]="24"></ango-textarea>`;
  protected readonly autoCode = `<ango-textarea placeholder="Auto height" [autoHeight]="true"></ango-textarea>`;

  protected playgroundOpen = false;
  protected playgroundPlaceholder = 'Type something...';
  protected playgroundRows = 4;
  protected playgroundCols = 30;
  protected playgroundAuto = false;

  protected get playgroundCode() {
    const attrs: string[] = [
      `placeholder="${this.playgroundPlaceholder}"`,
      `[rows]="${this.playgroundRows}"`,
      `[cols]="${this.playgroundCols}"`,
    ];
    if (this.playgroundAuto) attrs.push(`[autoHeight]="true"`);
    return `<ango-textarea ${attrs.join(' ')}></ango-textarea>`;
  }
}
