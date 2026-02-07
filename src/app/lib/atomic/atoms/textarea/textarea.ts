import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ango-textarea',
  standalone: true,
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicTextarea implements AfterViewInit {
  @Input() placeholder = '';
  @Input() rows = 3;
  @Input() cols = 30;
  @Input() disabled = false;
  @Input() autoHeight = false;

  @ViewChild('textarea', { static: true }) textareaRef!: ElementRef<HTMLTextAreaElement>;

  ngAfterViewInit() {
    this.resizeToContent();
  }

  onInput() {
    this.resizeToContent();
  }

  private resizeToContent() {
    if (!this.autoHeight || !this.textareaRef) return;
    const el = this.textareaRef.nativeElement;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }
}
