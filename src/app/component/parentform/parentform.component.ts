import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface/employee';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-parentform',
  templateUrl: './parentform.component.html',
  styleUrls: ['./parentform.component.css']
})
export class ParentformComponent implements OnInit {

  employees!:Employee[]
  index=0;
  employee!:Employee

  renderForm!:boolean
  renderEmployee!:boolean
  constructor(private employeeService:ServiceService) { }

  ngOnInit(): void {
    this.callEmployees()
  }
  callEmployees(){
    this.employeeService.getEmployees().subscribe((data )=>{
      this.employees = data
      console.log(this.employees)

    } )

  }
  onClickHandler(){
   if (this.index<this.employees.length)
   {
     this.renderForm=false
     this.renderEmployee=true
    this.employee=this.employees[this.index]
    this.index++
   }
   else{
     this.index=0;
   }
   }
  renderChild(){
    if(this.employee)
    {
      return true;
    }
    else{
      return false;
    }
  }
  onAdd(){
    this.renderForm=true
    this.renderEmployee=false
  }

}
