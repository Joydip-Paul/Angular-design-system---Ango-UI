import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AtomicFormField } from '../../molecules/form-field/form-field';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-molecules-page',
  standalone: true,
  imports: [AtomicFormField, AtomicCodeBlock],
  templateUrl: './molecules-page.html',
  styleUrl: './molecules-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesPage {
  protected readonly formFieldCode = `
<ango-form-field
  label="Email"
  placeholder="you@example.com"
  type="email"
></ango-form-field>
`.trim();
}
