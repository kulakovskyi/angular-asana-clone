import {Injectable} from "@angular/core";
import {map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {BoardInterface} from "../types/board.interface";
import {environment} from "../../../environment/environment";


@Injectable({
  providedIn: 'root'
})

export class TaskService{

  constructor(private http: HttpClient) {
  }


  //all projects
  getAll() : Observable<{ key: string, value: BoardInterface }[]>{
    return this.http.get<{ [key: string]: BoardInterface[] }>(`${environment?.['fbDBUrl']}/projects.json`)
      .pipe(
        map(response => {
          return Object.keys(response).map(key => ({ key, value: response[key][0] }));
        })
      );
  }

  //get id project
  getIdProject(id: string): Observable<BoardInterface>{
    return this.http.get<BoardInterface>(`${environment?.['fbDBUrl']}/projects/${id}.json`)
  }

  //update drug board
  updateBoard(data: BoardInterface, id: string) : Observable<BoardInterface[]>{
    return this.http.patch<BoardInterface[]>(`${environment?.['fbDBUrl']}/projects/${id}/0.json`, data)
  }

  createNew(data: any) : Observable<any>{
    return this.http.post(`${environment?.['fbDBUrl']}/projects.json`, data)
  }

}
