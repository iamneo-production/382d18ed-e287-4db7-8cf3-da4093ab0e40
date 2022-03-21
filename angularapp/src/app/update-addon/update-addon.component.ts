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

  
  id: number;
  addon: Addon = new Addon();

  constructor(private addonService:  AddonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addonService.getAddonById(this.id).subscribe(data => {
      console.log(data);
      this.addon = data;
      console.log("working");
    }, error => console.log(error));
  }

  onSubmit(){
    
    this.addonService.updateAddon(this.id, this.addon).subscribe( data =>{
  
      this.goToAddonList();
    }
    , error => console.log(error));
  }

  goToAddonList(){
    this.router.navigate(['/admin/addon']);
  }

}
