import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  title: string = 'My first angular2-google-maps project';
  lat: number = 18.5204;
  lng: number = 73.8567;
  public profileType:String;
  path : string = "";
    constructor(private route: ActivatedRoute, private router : Router) {
    console.log(this.route);
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params['url']);
    //this.profileType = this.route.snapshot.params['id'];
    console.log("Kushal :) " +  this.router.url);
  }

getRoute(){
return "/map";
//navigateroute();
}
  ngOnInit() {
  this.path = this.getRoute();
  }

}
