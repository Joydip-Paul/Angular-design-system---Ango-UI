import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  signal,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export type AtomicSelectOption = {
  label: string;
  value: string;
};

@Component({
  selector: 'ango-select',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicSelect {
  @Input() label = 'Select';
  @Input() placeholder = '';
  @Input() options: AtomicSelectOption[] = [];
  @Input() value = '';
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  protected readonly open = signal(false);

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  toggle() {
    if (this.disabled) return;
    this.open.update(value => !value);
  }

  select(value: string) {
    this.valueChange.emit(value);
    this.open.set(false);
  }

  get selectedLabel() {
    const match = this.options.find(option => option.value === this.value);
    return match?.label ?? this.placeholder;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.open()) return;
    const target = event.target as Node | null;
    if (target && this.elementRef.nativeElement.contains(target)) return;
    this.open.set(false);
  }
}
