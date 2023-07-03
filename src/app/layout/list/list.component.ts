import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  datos: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/data.json').subscribe(data => {
      this.datos = data;
    });
  }
}
