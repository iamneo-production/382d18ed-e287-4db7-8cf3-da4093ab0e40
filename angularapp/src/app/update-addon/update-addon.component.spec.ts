import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Addon } from '../addon';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-update-addon',
  templateUrl: './update-addon.component.html',
  styleUrls: ['./update-addon.component.css']
})
export class UpdateAddonComponent implements OnInit {

  
  AddonId: any;
  addon: Addon = new Addon();

  constructor(private addonService:  AddonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.AddonId = this.route.snapshot.params['AddonId'];
    this.addonService.getAddonById(this.AddonId).subscribe(data => {
      console.log(data);
      this.addon = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.addonService.updateAddon(this.AddonId, this.addon).subscribe( data =>{
      this.goToAddonList();
    }
    , error => console.log(error));
  }

  goToAddonList(){
    this.router.navigate(['/admin/addon']);
  }

}
