import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'code-block',
  standalone: true,
  templateUrl: './code-block.html',
  styleUrl: './code-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlock {
  @Input({ required: true }) code = '';

  protected readonly copied = signal(false);

  async copy() {
    if (!this.code) {
      return;
    }
    await navigator.clipboard.writeText(this.code);
    this.copied.set(true);
    window.setTimeout(() => this.copied.set(false), 1200);
  }
}
