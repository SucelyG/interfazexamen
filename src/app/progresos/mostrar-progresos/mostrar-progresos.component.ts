import { progresosService } from '../services/progresos.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarprogresosDataSource, progresos } from './mostrar-progresos-datasource';

@Component({
  selector: 'app-mostrar-progresos',
  templateUrl: './mostrar-progresos.component.html',
  styleUrls: ['./mostrar-progresos.component.css']
})
export class MostrarprogresosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<progresos>;
  dataSource!: MostrarprogresosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'peso_inicial', 'peso_meta', 'tallas_inicial', 'tallas_meta', 'Acciones'];


  constructor(private progresosService : progresosService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarprogresos();
  }

  listarprogresos(){
    this.dataSource = new MostrarprogresosDataSource();
    this.progresosService.getprogresos().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarprogresos(id:string){
    this.progresosService.deleteprogresos(id);
    this.listarprogresos();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarprogresos(id:string){
    this.router.navigate(['/editar-progresos/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
