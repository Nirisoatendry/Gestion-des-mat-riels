import { MaterielService } from './../../../core/services/materiel.service';
import { IMateriels, Action } from './../../../core/models/materiels';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss']
})
export class ListesComponent implements OnInit , AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'statut', 'etat','action'];
  dataSource !: MatTableDataSource<IMateriels>;
  materiels !: IMateriels[];  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  actions !: Action[];

  constructor( private materiel : MaterielService ,private _router : Router ) {
    // this.materiel.getAllMateriels().subscribe(data=>{
    //   this.dataSource = new MatTableDataSource(data);
    //   this.dataSource.paginator = this.paginator;
    //  this.dataSource.sort = this.sort;
    //   console.log(data);
    // });
    console.log(this._router.url);
    if(this._router.url=='/pages/materiels/listesDisponible'){
      this.materiel.getAllMaterielsDisponible().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
        console.log(data);
      });
    }else{
      this.materiel.getAllMateriels().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
        console.log(data);
      });
    }
  }
  ngOnInit(): void {
    this.materiel.getListAction().subscribe(data=>this.actions=data);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
