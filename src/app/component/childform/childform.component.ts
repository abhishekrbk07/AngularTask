import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../../interface/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.css']
})
export class ChildformComponent implements OnInit {
  @Input() employee !:Employee
  @Input() renderEmployee!:boolean

  ngOnInit(): void {
  }

}
