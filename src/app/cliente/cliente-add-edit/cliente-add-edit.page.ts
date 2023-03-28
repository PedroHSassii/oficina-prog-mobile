import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




// parei no slide 88 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {
 
  cliente = {nascimento: null, renda: null, tel: null, email: null, nome: null};
   //@ViewChild('inputNome', {read:ElementRef}) nome!:ElementRef;
  clienteForm! : FormGroup;

  hasErrors = false;
  errorMessage: string[]|undefined;

  constructor(private formBuilder: FormBuilder) { }

  validationMessages ={
    nome: [
      {type: 'required', message: 'Nome é obrigatório'},
      {type: 'minlength', message: 'Nome deve ter ao menos 3 caracteres'},
      {type: 'maxlength', message: 'Nome não deve ter ao mais 50 caracteres'}
    ],
    email: [
      {type: 'required', message: 'E-mail é obrigatório'},
      {type: 'email', message: 'O e-mail deve ter um formato válido'}
    ],
    tel: [
      {type: 'required', message: 'Telefone é obrigatório'}
    ],
    renda: [
      {type: 'required', message: 'Renda é obrigatório'},
      {type: 'min', message: 'Renda deve ser maior que zero'}
    ],
    nascimento: [
      {type: 'required', message: 'Nascimento é obrigatório'}
    ],
  }

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
  /*  this.errorMessage = [];
    if(this.clienteForm.get('nome')!.hasError('required')) {
      this.errorMessage.push('Nome é obrigatório');
    }
    if(this.clienteForm.get('email')!.hasError('required')) {
      this.errorMessage.push('Email é obrigatório');
    }
    if(this.clienteForm.get('tel')!.hasError('required')) {
      this.errorMessage.push('Telefone é obrigatório');
    }
    if(this.clienteForm.get('renda')!.hasError('required')) {
      this.errorMessage.push('Renda é obrigatório');
    }
    if(this.clienteForm.get('nascimento')!.hasError('required')) {
      this.errorMessage.push('Nascimento é obrigatório');
    }
    this.hasErrors = this.errorMessage.length > 0;*/
  }
}
