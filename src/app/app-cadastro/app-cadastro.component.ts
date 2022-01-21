import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// funcao que pode ser usada como exportacao. Fora ou dentro do cadastro
// essa nomenclatura é padrao
// ela exporta um validation form
export function passwordMatchValidator(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null => { // abaixo é baseado no erro. Pq por padrão estará errado
    const senha = control.get('senha')?.value; // o sinal de interrogacao quer dizer pode ser nulo (e nao tem problema) ou ter valor
    const confirma = control.get('confirmaSenha')?.value;

    //so é disparado caso haja discrepância entre a senha e a confirmação
    if(senha && confirma && senha !== confirma){
      return {
        senhaConfirmada: true
      }
    }
    return null; // retorno padrao
  }
}


@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss']
})
export class AppCadastroComponent implements OnInit {

  //copiados do app login
  formularioCadastro = this.loginBuilder.group({
    nome: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('',Validators.required),
    confirmaSenha: new FormControl('',Validators.required)
  },{validador: passwordMatchValidator()}); // ele é acionado a partir do construtor do formulario


  constructor(private loginBuilder: FormBuilder) { }

  //metodos copiados do app login
  get nome(){
    return this.formularioCadastro.get('nome')
  }

  get email(){
    return this.formularioCadastro.get('email')
  }

  get senha(){
    return this.formularioCadastro.get('senha')
  }

  get confirmaSenha(){
    return this.formularioCadastro.get('confirmaSenha')
  }


  enviaCadastro(){
    alert('enviado')
  }

  ngOnInit(): void {
  }

}
