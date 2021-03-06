import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Fabricante} from '../../shared/models/fabricante';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private urlEndPoint = 'http://localhost:8080/api/fabricantes';
  private urlEndPointComps = 'http://localhost:8080/api/fabricantes-componentes';

  constructor(private http: HttpClient) {
  }

  getFabricantes(): Observable<Fabricante[]> {
    return this.http.get<Fabricante[]>(this.urlEndPoint).pipe(
      map(response => response as Fabricante[])
    );
  }

  getFabricantesComponentes(): Observable<Fabricante[]> {
    return this.http.get<Fabricante[]>(this.urlEndPointComps).pipe(
      map(response => response as Fabricante[])
    );
  }

  getFabricanteById(id): Observable<Fabricante> {
    return this.http.get<Fabricante>(`${this.urlEndPoint}/${id}`).pipe(
      map(response => response as Fabricante)
    );
  }
}
