import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ango-radio',
  standalone: true,
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicRadio {
  @Input() label = 'Radio';
  @Input() name = 'ango-radio';
  @Input() value = '';
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }
}
