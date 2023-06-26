import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../interface/planta.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  public plantaUrl: string = 'http://localhost:8080/planta'

  constructor(private http: HttpClient) { }

  findAll() : Observable<Planta[]> {
    return this.http.get<Planta[]> (this.plantaUrl)
  }

  findById(id: number) : Observable<Planta> {
    return this.http.get<Planta> (`${this.plantaUrl}/${id}`)
  }

  save(planta: Planta) : Observable<Planta> {
    return this.http.post<Planta> (`${this.plantaUrl}`, planta)
  }
}
