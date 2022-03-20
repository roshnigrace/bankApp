import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// acno=""
// pwd=""
// amount=""


// acno1=""
// pwd1=""
// amount1=""

user:any
lDate:any
acno:any
depositeForm=this.fb.group({
  //form array create
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]] 

})
withdrawForm=this.fb.group({
  //form array create
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]] 

})

  constructor(private ds:DataService , private fb: FormBuilder, private router:Router) {
    this.user=this.ds.currentUname
    this.lDate = new Date
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please log in")                              //if user not register
      this.router.navigateByUrl("")
    }
  }
deposit(){
  alert("deposit clicked")           //calling deposite function of dataservice
  var acno = this.depositeForm.value.acno
  var pwd = this.depositeForm.value.pwd
  var amount = this.depositeForm.value.amount
if(this.depositeForm.valid){
  const result =this.ds.deposit(acno,pwd,amount)
  if(result){
    alert(amount+"successfully depositted.. and new balance is"+result)
  }
  } else{
    alert("invalid ")
  }
}

withdraw(){
  alert("withdraw clicked")
  var acno = this.withdrawForm.value.acno1                               //calling withdraw function of dataservice
  var pwd = this.withdrawForm.value.pwd1
  var amount = this.withdrawForm.value.amount1
  if(this.withdrawForm.valid){
const result =this.ds.withdraw(acno,pwd,amount)
if(result){
  alert(amount+"successfully debitted.. and new balance is"+result)
}
}else{
  alert("invalid ")
}
}
//logout
logout(){
  localStorage.removeItem("currentAcno")                         //remove items
  localStorage.removeItem("currentUname")
  this.router.navigateByUrl("")
}

deleteAccount(){
this.acno =JSON.parse(localStorage.getItem("currentAcno")||'')     
}
cancel(){
  this.acno=""
}
delete(event:any){
  alert("Delete account "+event+"  from parent")
}
}
