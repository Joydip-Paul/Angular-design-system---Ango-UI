import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ango-avatar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomicAvatar {
  @Input() userId: string | number | undefined;
  @Input() fname: string | undefined;
  @Input() lname: string | undefined;
  @Input() imageBase: string | undefined;
  @Input() size: number = 40;
  @Input() isBorderRadius?: boolean;
  @Input() isCircle?: boolean;
  @Input() fontSize?: string;

  get initials() {
    const first = this.fname?.trim()?.charAt(0) ?? '';
    const last = this.lname?.trim()?.charAt(0) ?? '';
    const combined = `${first}${last}`.toUpperCase();
    return combined || '?';
  }

  get imageSrc() {
    if (!this.imageBase || this.userId === undefined || this.userId === null) {
      return '';
    }
    return `${this.imageBase}${this.userId}`;
  }

  get radius() {
    if (this.isCircle) return '999px';
    if (this.isBorderRadius) return '12px';
    return '4px';
  }
}
