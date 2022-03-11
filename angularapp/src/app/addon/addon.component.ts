import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addon } from '../addon';
import { AddonService } from '../addon.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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


onSubmit(){
  this.addAddon();
  
}

logout(){
  sessionStorage.clear();
  this.router.navigate(['/login']);
}


  ngOnInit(): void {
  }

}
