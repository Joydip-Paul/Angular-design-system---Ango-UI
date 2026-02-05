import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicModal } from '../../organisms/modal/modal';
import {
  AtomicTable,
  AtomicTableAction,
  AtomicTableColumn,
} from '../../organisms/table/table';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-table-page',
  standalone: true,
  imports: [
    AtomicButton,
    AtomicSelect,
    AtomicDrawer,
    AtomicModal,
    AtomicTable,
    AtomicCodeBlock,
    NgIf,
    FormsModule
],
  templateUrl: './table-page.html',
  styleUrl: './table-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePage {
  protected readonly demoInterfaceCode = `
interface TeamMember {
  name: string;
  role: string;
  status: string;
  location: string;
}

const demoColumns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
  { key: 'location', label: 'Location' },
];

const demoRows: TeamMember[] = [
  { name: 'Joydip Paul', role: 'Designer', status: 'Active', location: 'Remote' },
  { name: 'Riya Das', role: 'Engineer', status: 'Active', location: 'Bengaluru' },
];
`.trim();

  protected readonly demoUsageCode = `
<ango-table
  [columns]="demoColumns"
  [rows]="demoRows"
  [actions]="actions"
  lastIndexAlign="right"
></ango-table>
`.trim();

  protected readonly demoActionsCode = `
const actions = [
  { id: 'edit', label: 'Edit', icon: '✏️' },
  { id: 'delete', label: 'Delete', icon: '🗑️' },
];

// Template
<ango-table
  [columns]="demoColumns"
  [rows]="demoRows"
  [actions]="actions"
  (actionClick)="onAction($event)"
></ango-table>

// Component
onAction(event: { actionId: string; rowIndex: number }) {
  if (event.actionId === 'delete') {
    // handle delete for rows[event.rowIndex]
  }
}
`.trim();
  protected readonly columns: AtomicTableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'location', label: 'Location' },
  ];

  protected readonly rows = [
    { name: 'Joydip Paul', role: 'Designer', status: 'Active', location: 'Remote' },
    { name: 'Riya Das', role: 'Engineer', status: 'Active', location: 'Bengaluru' },
    { name: 'Amit Roy', role: 'PM', status: 'On Leave', location: 'Kolkata' },
  ];

  protected readonly actions: AtomicTableAction[] = [
    { id: 'edit', label: 'Edit', icon: '✏️' },
    { id: 'view', label: 'View', icon: '👁️' },
    { id: 'delete', label: 'Delete' },
  ];

  protected readonly basicCode = `
<ango-table
  [columns]="columns"
  [rows]="rows"
  [actions]="actions"
></ango-table>
`.trim();

  protected readonly darkHeaderCode = `
<ango-table
  [columns]="columns"
  [rows]="rows"
  [actions]="actions"
  thBackground="#1f2937"
></ango-table>
`.trim();

  protected readonly noActionsCode = `
<ango-table
  [columns]="columns"
  [rows]="rows"
></ango-table>
`.trim();

  protected readonly compactCode = `
<ango-table
  [columns]="columns"
  [rows]="rows"
  [actions]="actions"
  radius="8px"
  fontSize="0.85rem"
></ango-table>
`.trim();

  protected playgroundOpen = false;
  protected playgroundRadius = '16px';
  protected playgroundFontSize = '0.95rem';
  protected playgroundThBg = '#0f172a';
  protected playgroundShowActions = true;

  protected demoModalOpen = false;
  protected demoAction: string | null = null;
  protected demoRowIndex: number | null = null;

  onDemoAction(event: { actionId: string; rowIndex: number }) {
    this.demoAction = event.actionId;
    this.demoRowIndex = event.rowIndex;
    this.demoModalOpen = true;
  }

  get demoRow() {
    if (this.demoRowIndex === null) return null;
    return this.rows[this.demoRowIndex] ?? null;
  }

  protected readonly actionOptions: AtomicSelectOption[] = [
    { label: 'Show actions', value: 'show' },
    { label: 'Hide actions', value: 'hide' },
  ];

  setShowActions(value: string) {
    this.playgroundShowActions = value === 'show';
  }

  protected get playgroundCode() {
    const attrs: string[] = [
      `[columns]="columns"`,
      `[rows]="rows"`,
      `thBackground="${this.playgroundThBg}"`,
      `radius="${this.playgroundRadius}"`,
      `fontSize="${this.playgroundFontSize}"`,
    ];
    if (this.playgroundShowActions) attrs.push(`[actions]="actions"`);
    return `<ango-table ${attrs.join(' ')}></ango-table>`;
  }
}
