import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export type AtomicTableColumn = {
  key: string;
  label: string;
};

export type AtomicTableAction = {
  id: string;
  label: string;
  icon?: string;
};

@Component({
  selector: 'ango-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicTable {
  @Input() columns: AtomicTableColumn[] = [];
  @Input() rows: Record<string, string | number | boolean | null>[] = [];
  @Input() thBackground = '#0f172a';
  @Input() radius = '16px';
  @Input() fontSize = '0.95rem';
  @Input() actions: AtomicTableAction[] = [];

  @Output() actionClick = new EventEmitter<{ actionId: string; rowIndex: number }>();

  displayValue(value: string | number | boolean | null | undefined) {
    if (value === null || value === undefined || value === '') return '-';
    return String(value);
  }

  onAction(actionId: string, rowIndex: number) {
    this.actionClick.emit({ actionId, rowIndex });
  }
}
