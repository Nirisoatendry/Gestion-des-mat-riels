import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HistoriqueE } from 'src/app/core/models/historique-e';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  displayedColumns: string[] = ['id_materiel','type','date_emprunt','date_remise'];
  dataSource !: MatTableDataSource<HistoriqueE>;
  etudiants !: HistoriqueE[];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private _api : ApiService) {
    this._api.getHistoryEtudiant().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   }

  ngOnInit(): void {
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
