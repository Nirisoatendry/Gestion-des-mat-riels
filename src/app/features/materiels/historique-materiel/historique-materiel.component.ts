import { Router } from '@angular/router';
import { MaterielService } from './../../../core/services/materiel.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IMateriels } from 'src/app/core/models/materiels';

@Component({
  selector: 'app-historique-materiel',
  templateUrl: './historique-materiel.component.html',
  styleUrls: ['./historique-materiel.component.scss']
})
export class HistoriqueMaterielComponent implements OnInit {
  displayedColumns : string[] = ['id','type','action','date'];
  dataSource !:MatTableDataSource<IMateriels>;
  materiels !: IMateriels;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;
  constructor(private materiel : MaterielService) { 
    this.materiel.getAllMaterielsHistoriques().subscribe(data=>{
      this.dataSource = new MatTableDataSource([...data]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }

  ngOnInit(): void {
    console.log("azza");  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
