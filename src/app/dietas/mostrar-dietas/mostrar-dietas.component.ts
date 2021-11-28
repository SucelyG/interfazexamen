import { Router } from '@angular/router';
import { dietaService } from '../services/dietas.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrardietaDataSource, dieta } from './mostrar-dietas-datasource';

@Component({
  selector: 'app-mostrar-dietas',
  templateUrl: './mostrar-dietas.component.html',
  styleUrls: ['./mostrar-dietas.component.css']
})
export class MostrardietaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<dieta>;
  dataSource!: MostrardietaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'dietas', 'listado_de_dietas', 'fecha_inicio','fecha_fin','id_persona', 'Acciones'];

  constructor(private dietaService : dietaService, private router:Router) {

  }

  ngOnInit(): void {
    this.listardieta();
  }

  listardieta(){
    this.dataSource = new MostrardietaDataSource();
    this.dietaService.getdieta().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminardieta(id:string){
    this.dietaService.deletedieta(id);
    this.listardieta();
    setTimeout(location.reload.bind(location), 500);
  }

  modificardieta(id:string){
    this.router.navigate(['/editar-dieta/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
