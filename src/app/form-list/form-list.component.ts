import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-service.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';
import { KpiCliente } from '../kpi-cliente';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html'
})
export class FormListComponent implements OnInit {
  private cliente:Cliente = new Cliente();

  private kpiCliente:KpiCliente = new KpiCliente();

  kpiClientes ={};
  clientes=[];

  constructor(private clienteService:FormService,private router:Router) { }

  ngOnInit() {
      this.listAll();
      this.listKpi();
  }

  listAll():void{
    this.clienteService.getList().subscribe(
      (cliente:any)=> this.clientes = cliente)
  }

  listKpi():void{
    this.clienteService.getKpiClientes().subscribe(
      (kpi:any)=> this.kpiClientes = kpi)
  }

  delete(cliente):void{
    this.clienteService.delete(cliente).subscribe(
      Response =>{
        this.listAll();
      },(err)=>{
        this.listAll();
      this.router.navigate(['list']);
    });
  }

}
