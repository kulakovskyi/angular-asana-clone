import {Injectable} from "@angular/core";
import {map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {firebaseConfig} from "../../../environment/environment";
import {BoardInterface} from "../types/board.interface";


@Injectable({
  providedIn: 'root'
})

export class TaskService{

  constructor(private http: HttpClient) {
  }


  //all projects
  getAll() : Observable<{ key: string, value: BoardInterface }[]>{
    return this.http.get<{ [key: string]: BoardInterface[] }>(`${firebaseConfig?.['fbDBUrl']}/projects.json`)
      .pipe(
        map(response => {
          return Object.keys(response).map(key => ({ key, value: response[key][0] }));
        })
      );
  }

  //get id project
  getIdProject(id: string): Observable<BoardInterface>{
    return this.http.get<BoardInterface>(`${firebaseConfig?.['fbDBUrl']}/projects/${id}.json`)
  }

  //update drug board
  updateBoard(data: BoardInterface, id: string) : Observable<BoardInterface[]>{
    return this.http.patch<BoardInterface[]>(`${firebaseConfig?.['fbDBUrl']}/projects/${id}/0.json`, data)
  }

  //delete card

  removeCard(id: string, column: number, card: any){
    return this.http.delete<void>(`${firebaseConfig?.['fbDBUrl']}/projects/${id}/0/tracks/${column}/talks/${card}.json`)
  }

}
