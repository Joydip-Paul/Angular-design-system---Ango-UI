import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ango-checkbox',
  standalone: true,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicCheckbox implements AfterViewInit, OnChanges {
  @Input() label = 'Checkbox';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() indeterminate = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  @ViewChild('input', { static: true }) inputRef!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.syncIndeterminate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['indeterminate']) {
      this.syncIndeterminate();
    }
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }

  private syncIndeterminate() {
    if (this.inputRef?.nativeElement) {
      this.inputRef.nativeElement.indeterminate = this.indeterminate;
    }
  }
}
