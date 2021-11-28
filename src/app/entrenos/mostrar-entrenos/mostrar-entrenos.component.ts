import { entrenosService } from './../services/entrenos.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarentrenosDataSource, entrenos } from './mostrar-entrenos-datasource';

@Component({
  selector: 'app-mostrar-entrenos',
  templateUrl: './mostrar-entrenos.component.html',
  styleUrls: ['./mostrar-entrenos.component.css']
})
export class MostrarentrenosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<entrenos>;
  dataSource!: MostrarentrenosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_entrenador', 'id_rutinas', 'id_persona',  'Acciones'];


  constructor(private entrenosService : entrenosService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarentrenos();
  }

  listarentrenos(){
    this.dataSource = new MostrarentrenosDataSource();
    this.entrenosService.getentrenos().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarentrenos(id:string){
    this.entrenosService.deleteentrenos(id);
    this.listarentrenos();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarentrenos(id:string){
    this.router.navigate(['/editar-entrenos/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
