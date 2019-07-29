import { Component, Input } from '@angular/core';
import { FormControl , FormBuilder , FormGroup} from '@angular/forms';


export interface GroupState{
  name: string;
  option: string [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  options: FormGroup;

  title = 'BOOK';

  @Input() always: string = "always";

  @Input() red: string = "red";

  place : string = "end";

  myControl = new FormControl();

  disableSelect = new FormControl(false);

  groupState :  GroupState[] = [{
    name: '',
    option: []
  }];

  constructor(form: FormBuilder){
    this.options = form.group({
      hideRequired: false,
      floatLabel: "auto"
    });
  }

}
