import { DocenteCursoService } from './../services/docente-curso.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarDocenteCursoDataSource, DocenteCurso } from './mostrar-docente-curso-datasource';

@Component({
  selector: 'app-mostrar-docente-curso',
  templateUrl: './mostrar-docente-curso.component.html',
  styleUrls: ['./mostrar-docente-curso.component.css']
})
export class MostrarDocenteCursoComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DocenteCurso>;
  dataSource!: MostrarDocenteCursoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_docente', 'docente', 'id_curso', 'curso', 'stauts', 'fecha_inicio', 'fecha_fin', 'Acciones'];


  constructor(private docenteCursoService : DocenteCursoService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarDocenteCursos();
  }

  listarDocenteCursos(){
    this.dataSource = new MostrarDocenteCursoDataSource();
    this.docenteCursoService.getDocenteCursos().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarDocenteCurso(id:string){
    this.docenteCursoService.deleteDocenteCursos(id);
    this.listarDocenteCursos();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarDocenteCurso(id:string){
    this.router.navigate(['/editar-docente-curso/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
