import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {
 
  cliente = {nascimento: null, renda: null, tel: null, email: null, nome: null};
   //@ViewChild('inputNome', {read:ElementRef}) nome!:ElementRef;
  clienteForm! : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: ['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      tel: ['',Validators.required],
      renda: ['',Validators.compose([Validators.required, Validators.min(0)])],
      nascimento: ['',Validators.required]
    });
  }

  //submit(inputNome: any, inputEmail: any,inputTelefone: any,inputRenda: any, inputNascimento: any,){
    // console.log(inputNome.value + '/' + inputEmail.value + '/' +inputTelefone.value + '/' +inputRenda.value + '/' + inputNascimento.value);
  //}
  public nome: string | undefined;

  submit() {
    if(this.clienteForm.invalid || this.clienteForm.pending) {return};
  }
}
