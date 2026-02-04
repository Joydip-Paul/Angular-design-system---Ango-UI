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

export type AtomicDropdownItem = {
  label: string;
  value: string;
};

@Component({
  selector: 'ango-dropdown',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicDropdown {
  @Input() label = 'Dropdown';
  @Input() placeholder = 'Select option';
  @Input() items: AtomicDropdownItem[] = [];
  @Input() selected = '';
  @Input() disabled = false;
  @Input() openOnHover = false;

  @Output() selectedChange = new EventEmitter<string>();

  protected readonly open = signal(false);
  private hoverCloseTimer?: number;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  toggle() {
    if (this.disabled) return;
    this.open.update(value => !value);
  }

  close() {
    this.open.set(false);
  }

  select(value: string) {
    this.selected = value;
    this.selectedChange.emit(value);
    this.open.set(false);
  }

  get selectedLabel() {
    const match = this.items.find(item => item.value === this.selected);
    return match?.label ?? this.placeholder;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.open()) return;
    const target = event.target as Node | null;
    if (target && this.elementRef.nativeElement.contains(target)) return;
    this.open.set(false);
  }

  onMouseEnter() {
    if (this.openOnHover && !this.disabled) {
      if (this.hoverCloseTimer) {
        window.clearTimeout(this.hoverCloseTimer);
        this.hoverCloseTimer = undefined;
      }
      this.open.set(true);
    }
  }

  onMouseLeave() {
    if (this.openOnHover && !this.disabled) {
      this.hoverCloseTimer = window.setTimeout(() => {
        this.open.set(false);
      }, 120);
    }
  }

  onMenuEnter() {
    if (this.hoverCloseTimer) {
      window.clearTimeout(this.hoverCloseTimer);
      this.hoverCloseTimer = undefined;
    }
  }

  onMenuLeave() {
    if (this.openOnHover && !this.disabled) {
      this.open.set(false);
    }
  }
}
