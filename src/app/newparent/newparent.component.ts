import { Component, OnInit } from '@angular/core';
import { Employee } from '../interface/employee';
import {ServiceService } from '../services/service.service'

@Component({
  selector: 'app-newparent',
  templateUrl: './newparent.component.html',
  styleUrls: ['./newparent.component.css']
})
export class NewparentComponent implements OnInit {
  employees!:Employee[]
  index=0;
  employee!:Employee

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

}
