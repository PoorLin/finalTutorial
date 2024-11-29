import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() childname!: string;

  @Output() childChange = new EventEmitter();


  add= () =>{
    this.childChange.emit('opps');
  }




}
