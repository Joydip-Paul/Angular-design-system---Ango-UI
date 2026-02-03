import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AtomicSignInCard } from '../../organisms/sign-in-card/sign-in-card';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-organisms-page',
  standalone: true,
  imports: [AtomicSignInCard, AtomicCodeBlock],
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
}
