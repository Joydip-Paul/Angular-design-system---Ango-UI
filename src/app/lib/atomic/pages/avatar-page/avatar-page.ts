import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtomicButton } from '../../atoms/button/button';
import { AtomicCheckbox } from '../../atoms/checkbox/checkbox';
import { AtomicSelect, AtomicSelectOption } from '../../atoms/select/select';
import { AtomicAvatar } from '../../atoms/avatar/avatar';
import { AtomicDrawer } from '../../organisms/drawer/drawer';
import { AtomicCodeBlock } from '../../utils/copy/code-block/code-block';

@Component({
  selector: 'ango-avatar-page',
  standalone: true,
  imports: [
    AtomicButton,
    AtomicCheckbox,
    AtomicSelect,
    AtomicAvatar,
    AtomicDrawer,
    AtomicCodeBlock,
    FormsModule,
  ],
  templateUrl: './avatar-page.html',
  styleUrl: './avatar-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarPage {
  protected readonly basicCode = `<ango-avatar fname="Joydip" lname="Paul"></ango-avatar>`;
  protected readonly imageCode = `<ango-avatar imageBase="https://i.pravatar.cc/150?img=" [userId]="12"></ango-avatar>`;
  protected readonly circleCode = `<ango-avatar fname="JP" [isCircle]="true"></ango-avatar>`;
  protected readonly radiusCode = `<ango-avatar fname="JP" [isBorderRadius]="true"></ango-avatar>`;
  protected readonly sizeCode = `<ango-avatar fname="JP" [size]="64"></ango-avatar>`;

  protected playgroundOpen = false;
  protected playgroundUserId = 12;
  protected playgroundFname = 'Joydip';
  protected playgroundLname = 'Paul';
  protected playgroundImageBase = 'https://i.pravatar.cc/150?img=';
  protected playgroundSize = 56;
  protected playgroundRadiusMode: 'square' | 'rounded' | 'circle' = 'circle';
  protected playgroundFontSize = '0.9rem';

  protected readonly radiusOptions: AtomicSelectOption[] = [
    { label: 'Square', value: 'square' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Circle', value: 'circle' },
  ];

  setPlaygroundRadius(value: string) {
    if (value === 'square' || value === 'rounded' || value === 'circle') {
      this.playgroundRadiusMode = value;
    }
  }

  protected get isCircle() {
    return this.playgroundRadiusMode === 'circle';
  }

  protected get isRounded() {
    return this.playgroundRadiusMode === 'rounded';
  }

  protected get playgroundCode() {
    const attrs: string[] = [];
    if (this.playgroundUserId) attrs.push(`[userId]="${this.playgroundUserId}"`);
    if (this.playgroundImageBase) attrs.push(`imageBase="${this.playgroundImageBase}"`);
    if (this.playgroundFname) attrs.push(`fname="${this.playgroundFname}"`);
    if (this.playgroundLname) attrs.push(`lname="${this.playgroundLname}"`);
    if (this.playgroundSize) attrs.push(`[size]="${this.playgroundSize}"`);
    if (this.playgroundFontSize) attrs.push(`fontSize="${this.playgroundFontSize}"`);
    if (this.isRounded) attrs.push(`[isBorderRadius]="true"`);
    if (this.isCircle) attrs.push(`[isCircle]="true"`);
    return `<ango-avatar ${attrs.join(' ')}></ango-avatar>`;
  }
}
