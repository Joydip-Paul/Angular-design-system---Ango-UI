import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicAccordion } from '../../atoms/accordion/accordion';
import { NgFor } from '@angular/common';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-accordion-page',
  standalone: true,
  imports: [
    AtomicButton,
    AtomicCheckbox,
    AtomicAccordion,
    NgFor,
    AtomicDrawer,
    AtomicCodeBlock,
    FormsModule,
  ],
  templateUrl: './accordion-page.html',
  styleUrl: './accordion-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionPage {
  protected readonly basicCode = `
<ango-accordion title="Shipping details">
  <p>Content inside the accordion.</p>
</ango-accordion>
`.trim();

  protected readonly openCode = `
<ango-accordion title="Expanded" [open]="true">
  <p>Expanded by default.</p>
</ango-accordion>
`.trim();

  protected readonly disabledCode = `
<ango-accordion title="Disabled" [disabled]="true">
  <p>Disabled accordion.</p>
</ango-accordion>
`.trim();

  protected playgroundOpen = false;
  protected playgroundTitle = 'Playground accordion';
  protected playgroundExpanded = false;
  protected playgroundDisabled = false;
  protected playgroundIcon = '⚡';

  protected readonly demoItems = [
    {
      title: 'Getting started',
      content: 'Install dependencies and copy the atomic folder into your app.',
      icon: '🚀',
    },
    {
      title: 'Tokens',
      content: 'Edit tokens.scss to update colors, radius, and typography.',
      icon: '🎨',
    },
    {
      title: 'Playgrounds',
      content: 'Open the drawer to tweak props and copy code snippets.',
      icon: '🧪',
    },
  ];
  protected activeIndex = 0;

  protected readonly demoLoopCode = `
<ango-accordion
  *ngFor="let item of demoItems; let i = index"
  [title]="item.title"
  [icon]="item.icon"
  [open]="activeIndex === i"
  (openChange)="setActive(i)"
>
  <p>{{ item.content }}</p>
</ango-accordion>
`.trim();

  setActive(index: number) {
    this.activeIndex = index;
  }

  protected get playgroundCode() {
    const attrs: string[] = [`title="${this.playgroundTitle}"`];
    if (this.playgroundIcon) attrs.push(`icon="${this.playgroundIcon}"`);
    if (this.playgroundExpanded) attrs.push(`[open]="true"`);
    if (this.playgroundDisabled) attrs.push(`[disabled]="true"`);
    return `<ango-accordion ${attrs.join(' ')}>
  <p>Accordion content goes here.</p>
</ango-accordion>`;
  }
}
