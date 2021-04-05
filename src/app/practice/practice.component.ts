import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ProviderService } from '../services/provider.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  rating: string;


  constructor() {


  }

  ngOnInit() { }




  // getRating(t: string) {
  //   this.rating = t;
  //   console.log(this.rating);
  // }


}
