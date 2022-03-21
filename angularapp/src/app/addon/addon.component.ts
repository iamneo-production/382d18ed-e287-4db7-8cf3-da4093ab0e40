import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addon } from '../addon';
import { AddonService } from '../addon.service';
<<<<<<< HEAD
=======
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

>>>>>>> f01b0a6640f1d4d98910ed973a46659431672f20
@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  x:any;
  addon: Addon = new Addon();
  addons: Addon[] | undefined;
  constructor(private addonService: AddonService, 
    private router: Router) { }

  addAddon() {
    this.x = document.getElementById("addon_inputt");
    if (this.x.style.display === "none") {
        this.x.style.display = "block";
    } else {
        this.x.style.display = "none";
    }
}

private getAddon() {
<<<<<<< HEAD
  this.addonService.viewAddon().subscribe(data => {
=======
  this.addonService.getAddon().subscribe(data => {
>>>>>>> f01b0a6640f1d4d98910ed973a46659431672f20
    this.addons = data;
    console.log(data);
  });
}

saveAddon(){
  this.addonService.createAddon(this.addon).subscribe(data=>{
    this.getAddon();
  },
  error => console.log(error)
  );
}

deleteEmployee(AddonId: number){
  this.addonService.deleteAddon(AddonId).subscribe(data=>{
    console.log(data);
    this.getAddon();
  })
}

updatePlans(AddonId: number){
  this.router.navigate(['admin/update-addon', AddonId]);
}

onSubmit(){
  this.saveAddon();
}

logout(){
  sessionStorage.clear();
  this.router.navigate(['/login']);
}


  ngOnInit(): void {
<<<<<<< HEAD
    this.saveAddon();
=======
>>>>>>> f01b0a6640f1d4d98910ed973a46659431672f20
  }

}
