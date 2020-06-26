import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filter = [
    { title: "Hobbies", tags: ["Klavier", "Filmemachen", "Laser Tag", "Fußball", "tag","tag","tag","tag","tag","tag","tag"], category: "freizeit"},
    { title: "Spontanes", tags: ["Caffee", "See", "Wasser Sport", "tag","tag","tag","tag","tag","tag","tag"], category: "freizeit"},
    { title: "Ehrenamtlich", tags: ["Feuerwehr", "Stadt putzen", "Altersheim", "tag","tag","tag","tag","tag","tag","tag"], category: "engagement"},
    { title: "Bürgerthemen", tags: ["Politische Discussion", "Corona", "Komune", "tag","tag","tag","tag","tag","tag","tag"], category: "engagement"}
  ];

  constructor() { 
  }


  getAll() {
    return this.filter;
  }

  getByTitle(title) {
    return this.filter.find(x => x.title == title);
  }
}
