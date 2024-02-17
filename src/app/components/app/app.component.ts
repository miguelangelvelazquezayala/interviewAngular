import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public bonusSteps = environment.bonusSteps;
  public title = environment.title;
  isFinalStep: boolean;

  constructor() {
    console.log(environment.rootClass);

    if((environment.rootClass === 'first-steps') || (environment.rootClass === undefined)) {
      this.isFinalStep = false;
    }
    else {
      this.isFinalStep = true;
    }
    
    console.log(this.isFinalStep);
  }
}
