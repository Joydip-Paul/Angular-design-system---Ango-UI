import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ango-toggle',
  standalone: true,
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicToggle {
  @Input() label = 'Toggle';
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }
}
