import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';

import { MomentService } from '../../../services/moment.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/environments/environment';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  //todo search

  constructor(private momentService: MomentService){}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {

      const data = items.data;
    
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
        
      });
      
    });
  };
}
