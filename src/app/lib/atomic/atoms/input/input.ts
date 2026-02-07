import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ango-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicInput {
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() disabled = false;

  protected showPassword = false;

  togglePassword() {
    if (this.disabled) return;
    this.showPassword = !this.showPassword;
  }

  get inputType() {
    if (this.type !== 'password') return this.type;
    return this.showPassword ? 'text' : 'password';
  }
}
