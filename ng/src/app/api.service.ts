import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from '../environments/environment';

interface ApiResponse<T> {
  data: {
    [key: string]: T
  };
};

interface Api {
  projects: Array<Project>;
};
export interface Project {
  title: string;
  languages: Array<Tool>;
  tools: Array<Tool>;
  description: string;
  about: string | null;
  url: string | null;
  source_code_url: string | null;
};

interface Tool {
  name: string;
  color: string;
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: Api;
  private url: string;
  private headers: HttpHeaders;

  apiUpdate: Subject<Api> = new Subject<Api>();

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.api = {
      'projects': []
    };
  }

  fetch(query: string): void {
    this.http.post<ApiResponse<Array<Project>>>(
      this.url,
      { 'query': query },
      { 'headers': this.headers }
    ).subscribe(res => {
      this.api.projects = res.data.projects;
      this.apiUpdate.next(this.api);
    });
  }

  get(): Api {
    return this.api;
  }

  getProjects(): Array<Project> {
    return this.api.projects
  }
}