import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any                         //currently login acno 
  currentUname:any
  database:any={
    1000:{acno:1000,uname:"rose",password:1000,balance:5000,transaction:[]},                    
    1001:{acno:1001,uname:"tiffu",password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,uname:"achu",password:1002,balance:5000,transaction:[]}
  }

  constructor() { 
    this.getData()
   }
  //to store data in local storage
  storeData(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
    if(this.currentUname){
      localStorage.setItem("currentUname",JSON.stringify(this.currentUname))
    }
  }
//to get data from local storage i.e to display data perminently 
  getData(){
   if(localStorage.getItem("database")){
     this.database = JSON.parse(localStorage.getItem("database")||'')
   }
   if(localStorage.getItem("currentAcno")){
    this.currentAcno = JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  if(localStorage.getItem("currentUname")){
    this.currentUname = JSON.parse(localStorage.getItem("currentUname")||'')
  }
  }
  //register
  register(acno:any,pwd:any,uname:any){
    let database=this.database
    if(acno in database){
      return false
    }else{
      database[acno]={
        acno,
        uname,
        password:pwd,
        balance:0,
        transaction:[]
      }
      this.storeData()                                         //store data into local storage
      return true
    }
  }
//login  /////
  login(acno:any,password:any){
    let database=this.database
    if(acno in database){
      if(password==database[acno]["password"]){                               //acno index inside database thats way is used []
        this.currentAcno = acno                                  //current acno fetch
       this.currentUname= database[acno]["uname"]
       this.storeData()                                               //store data into local storage
        return true
      }else{
        alert("incorrect password")
        return false
      }
    }else{
      alert("user doesnot exit")
      return false
    }
  }
  //deposite
  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)  // converting string into num
  let database = this.database
  if(acno in database){
    if(password==database[acno]["password"]){
           database[acno]["balance"]+=amount    
           database[acno]["transaction"].push({
             amount:amount,                           //key:value
             type:"CREDIT"
           })
           console.log(database);
           this.storeData()                           //store data into local storage
        return database[acno]["balance"]
    }else{
       alert("incorrect password")
       return false
  }
  }else{
    alert("user doesnot exit")
    return false
  }
  }
   //withdraw 
  withdraw(acno:any,password:any,amt:any){
    var amount=parseInt(amt)  //string num convert
  let database = this.database
  if(acno in database){
    if(password==database[acno]["password"]){
      if(database[acno]["balance"]>amount){
           database[acno]["balance"]-=amount

           database[acno]["transaction"].push({
            amount:amount,                           //key:value
            type:"DEBIT"
          })
          console.log(database);
          this.storeData()                           //store data into local storage
          
        return database[acno]["balance"]
    }else{
       alert("Insufficient Balance")
       return false
  }
}else{
    alert("incorrect password")
    return false
  }
  }
  else{
    alert("user doesnot exit")
    return false
  }
}

//transaction 
getTransaction(acno:any){

  return this.database[acno]["transaction"]

}
}

