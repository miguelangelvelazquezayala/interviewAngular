import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/store/app.state';
//import { deleteItem } from '../../store/list-item.actions';
import { addItem } from '../../store/list-item.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public newItem: string = '';
  public Items$: Observable<State> = new Observable<State>();

  public form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.Items$ = store;

    this.form = this.fb.group({
      newItem: ['', [Validators.required]],
    });

    // Observa los cambios en el estado de validación del formulario
    this.form.statusChanges.subscribe((status) => {
      console.log('Estado del formulario:', status); // Puedes hacer lo que desees con el estado del formulario
    });
  }

  public add(): void {
    const newItem = this.form.get('newItem')?.value;
    this.store.dispatch(addItem({ item: newItem }));
  }

  // public deleteItem(item: string): void {
  //   this.store.dispatch(deleteItem({ item }));
  // }
}
