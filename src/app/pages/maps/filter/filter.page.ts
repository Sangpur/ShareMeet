import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  filter;

  constructor(private router: Router, private route: ActivatedRoute, private filterService: FilterService) { }

  ngOnInit() {
    let category = this.route.snapshot.paramMap.get('category');
    this.filter = this.filterService.getByTitle(category);
  }

  returnToMap() {
    this.router.navigate(['/tabs/maps']);
  }
}
