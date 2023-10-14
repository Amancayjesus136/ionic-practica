import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  characters: any[] = [];

  constructor(private http: HttpClient) {
    this.loadCharacters();
  }

  loadCharacters() {
    this.http.get('assets/db.json').subscribe((data: any) => {
      this.characters = data.characters;
    });
  }
}
