import { ApiService } from './../../core/services/api.service';
import { HistoriqueG } from './../../core/models/historiqueG';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action, IMateriels } from 'src/app/core/models/materiels';
import { MaterielService } from 'src/app/core/services/materiel.service';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  displayedColumns: string[] = ['id_materiel', 'type', 'status', 'etat','nom','prenom','date'];
  dataSource !: MatTableDataSource<HistoriqueG>;
  materiels !: HistoriqueG[];  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private api : ApiService ) {
    this.api.getAllHistory().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }
  ngOnInit(): void {
    // this.materiel.getListAction().subscribe(data=>this.actions=data);
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
