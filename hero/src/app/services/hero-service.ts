import { Injectable, signal } from '@angular/core';
import { Hero } from '../hero.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {


  /* 
  addOrUpdate(dataHero: Omit<Hero, 'completata'>) {
    this.heroes.update(list => {
      const index = list.findIndex(h => h.id === dataHero.id);
      if (index !== -1) {
        return list.map(h => h.id === dataHero.id ? { ...h, ...dataHero } : h);
      }
      return [...list, { ...dataHero, completata: false }];
    });
  }*/

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // get - per prende gli eroi

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl)
  }


  getHeroe(_id: string): Observable<Hero> {
    return this.http.get<Hero>(this.apiUrl + `/${_id}`)
  }

  // post - per aggiungere un eroe

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiUrl, hero)
  }

  //put - per modificare gli eroi
  modifyHero(id: string, hero: Hero): Observable<Hero> {
    const { _id, ...heroDataWithoutId } = hero;
    return this.http.put<Hero>(`${this.apiUrl}/${id}`, heroDataWithoutId);
  }

}
