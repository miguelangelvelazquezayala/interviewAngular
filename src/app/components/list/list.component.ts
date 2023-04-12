import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/app.state';
import { getList } from 'src/app/store/list-item.selectors';
import { Observable } from 'rxjs';
import { deleteItem } from '../../store/list-item.actions';
import { ForwardRefHandling } from '@angular/compiler';
import { OperationalError } from 'cypress/types/bluebird';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items$: Observable<string[]>; // Update the type to Observable<string[]>

  constructor(private store: Store<State>) {
    this.items$ = this.store.pipe(select(getList));
  }

  public delete(item: any) {
    this.store.dispatch(deleteItem({ item }));
  }
}
