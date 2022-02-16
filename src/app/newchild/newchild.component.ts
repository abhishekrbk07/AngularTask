import { Component, OnInit, Input} from '@angular/core';
import { Employee } from '../interface/employee';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit {
@Input() employee !:Employee

  constructor() { }

  ngOnInit(): void {
  }

}
