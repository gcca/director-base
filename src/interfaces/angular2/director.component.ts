import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Director } from '../../domain/model/director/director';
import { DirectorRepository }
  from '../../domain/model/director/director.repository';


let template = `
  <button (click)="back()">Volver</button>
  <div>
    <line-edit label="Nombre" [(ngModel)]="director.fullName"></line-edit>
    <line-edit label="Género" [(ngModel)]="director.sex"></line-edit>
    <line-edit label="Nacionalidad"
               [(ngModel)]="director.nationality"></line-edit>
    <line-edit label="Ciudad" [(ngModel)]="director.city"></line-edit>
    <line-edit label="DOB" [(ngModel)]="director.dob"></line-edit>
    <line-edit label="Edad" [(ngModel)]="director.age"></line-edit>
    <line-edit label="Blockbuster"
               [(ngModel)]="director.blockbusters[0].movieName"></line-edit>
  </div>
  <button (click)="save(director)">Guardar</button>
`;

// TODO: NullDirector (pattern)
let NullDirector = new Director('', '', '', '', 0, 0, [<any>{}]);


@Component({ selector: 'director', template })
export class DirectorComponent implements OnInit {

  director: Director = NullDirector;

  private directorRepository: DirectorRepository;

  constructor(private route: ActivatedRoute,
              private location: Location) {}

  save(director: Director): void {
    this.directorRepository.store(director)
      .then(() => this.back())
      .catch(() => alert('Save director error'));
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.directorRepository
                                       .find(params['fullName']))
      .subscribe(director => this.director = director);
  }

  back(): void {
    this.location.back();
  }

}
