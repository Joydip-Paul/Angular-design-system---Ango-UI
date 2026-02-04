import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicSignInCard } from '../../organisms/sign-in-card/sign-in-card';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-organisms-page',
  standalone: true,
  imports: [AtomicButton, AtomicSignInCard, AtomicDrawer, AtomicCodeBlock, FormsModule],
  templateUrl: './organisms-page.html',
  styleUrl: './organisms-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganismsPage {
  protected readonly signInCode = `
<ango-signin-card
  title="Sign in"
  subtitle="Use your company email"
></ango-signin-card>
`.trim();

  protected playgroundOpen = false;
  protected playgroundTitle = 'Sign in';
  protected playgroundSubtitle = 'Use your company email';

  protected get playgroundCode() {
    return `<ango-signin-card
  title="${this.playgroundTitle}"
  subtitle="${this.playgroundSubtitle}"
></ango-signin-card>`;
  }
}
