import { Resposta } from './../model/resposta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  buscarLivros(){
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-02-27&sortBy=publishedAt&apiKey=442e803ccf1249f395c6847419eb883f';

    return this.http.get<Resposta>(url);
  }
}
