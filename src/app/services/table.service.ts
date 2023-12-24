import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  restapi_url="http://localhost:8181/ords/oussema"

  constructor(private http:HttpClient) { 
  }

  private extractColumnsAndData(response: any[]): { dynamicColumns: string[], dynamicData: any[] } {
    if (!response || response.length === 0) {
      return { dynamicColumns: [], dynamicData: [] };
    }
  
    // Extract column names from the first object in the response
    const dynamicColumns = Object.keys(response[0]);
  
    // Extract data from the response
    const dynamicData = response.map(item => {
      const rowData: { [key: string]: any } = {};
      dynamicColumns.forEach(column => {
        rowData[column] = item[column];
      });
      return rowData;
    });
  
    return { dynamicColumns, dynamicData };
  }

  // privatefetch_rows(table_name: String){
  //   let responseData: any;
  //   return this.http.post<any>(this.restapi_url+"/get_all_rows/", { "p_table_name": table_name}).subscribe({
  //     next: (response) => {
  //       // console.log('Response:', response);
  //       responseData=response['~ret'];
  //       return this.extractColumnsAndData(responseData);
  //       // Handle the response data as needed
  //     },
  //     error: (error) => {
  //       console.error('Error:', error);
  //       // return null;
  //       // Handle errors
  //     }
  //   });
  // }

  fetch_rows(table_name: string): Observable<{ dynamicColumns: string[], dynamicData: any[] }> {
    return this.http.post<any>(this.restapi_url + "/get_all_rows/", { "p_table_name": table_name})
      .pipe(
        map(response => {
          let responseData = response['~ret'];
          return this.extractColumnsAndData(responseData);
        })
      );
  }
}
