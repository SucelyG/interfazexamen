import { Router } from '@angular/router';
import { clienteService } from '../services/cliente.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarclienteDataSource, cliente } from './mostrar-clientes-datasource';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarclienteComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<cliente>;
  dataSource!: MostrarclienteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona','id_rutina','id_entrenos','id_dieta','status','Acciones'];


  constructor(private clienteService:clienteService, private router:Router) {
    this.listarcliente();
  }

  ngOnInit(): void {
    this.listarcliente();
  }

  listarcliente(){
    this.dataSource = new MostrarclienteDataSource();
    this.clienteService.getcliente().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    );
  }

  eliminarcliente(id:string){
    this.clienteService.deletecliente(id);
    this.listarcliente();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarcliente(id:string){
    this.router.navigate(['/editar/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
