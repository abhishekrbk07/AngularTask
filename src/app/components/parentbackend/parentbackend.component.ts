import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface/employee';
import { ServiceService } from 'src/app/services/service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-parentbackend',
  templateUrl: './parentbackend.component.html',
  styleUrls: ['./parentbackend.component.css']
})
export class ParentbackendComponent implements OnInit {

  employees!:Employee[]
  index=0;
  employee!:Employee
  id=1;

  renderForm:boolean=false
  renderEmployee!:boolean
  exform!:FormGroup;
  constructor(private employeeService:ServiceService) { }

  ngOnInit(): void {
    this.callEmployees()
    this.firstCall()

  }
  callEmployees(){
    this.employeeService.getEmployees().subscribe((data )=>{
      this.employees = data
      console.log(this.employees)

    } )

  }
  onClickHandler(){
    this.renderEmployee=true
   if  
   (this.index<this.employees.length)
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
  onAdd(){
  
    this.renderForm=true
    this.renderEmployee=true
  }
  
  onSubmit(employee: any) {
    this.renderForm = false;
    this.employee = employee;
    this.employeeService.postEmployees(employee).subscribe({

      next: (data) => {

        this.employees = data;

        console.log(this.employees);

      },

      error: (e) => console.error(e),

    });
  
  }
  firstCall(){

    this.renderEmployee= true;
    
    this.employeeService.getEmployeeById(this.id).subscribe({
    
    next: (data) => {
    
    this.employee= data;
    
    },
    
    error: (e) => console.error(e),
    
    });
    
    }
  }
  

