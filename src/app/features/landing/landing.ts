import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AtomicButton } from "../../lib/atomic/public-api";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, AtomicButton],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {

}
