import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../../interface/employee';

@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.css']
})
export class ChildformComponent implements OnInit {
  @Input() employee !:Employee
  constructor() { }

  ngOnInit(): void {
  }

}
