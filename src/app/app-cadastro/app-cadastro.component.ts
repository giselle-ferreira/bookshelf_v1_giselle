import { HotToastService } from '@ngneat/hot-toast';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacaoFirebase.service';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// funcao que pode ser usada como exportacao. Fora ou dentro do cadastro
// essa nomenclatura é padrao
// ela exporta um validation form
export function passwordMatchValidator(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null => { // abaixo é baseado no erro. Pq por padrão estará errado
    const senha = control.get('senha')?.value; // o sinal de interrogacao quer dizer pode ser nulo (e nao tem problema) ou ter valor
    const confirma = control.get('confirmaSenha')?.value;

    // só é disparado caso haja discrepância entre a senha e a confirmação
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

  // copiados do app login
  // confirmação dos campos
  formularioCadastro = this.loginBuilder.group({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmaSenha: new FormControl('', Validators.required)
  }, {validators: passwordMatchValidator()}); // acionado a partir do construtor do formulário


  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router
    ) { }

  // métodos copiados do app login
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
    // rotina de estruturação de constante
    if(!this.formularioCadastro.valid){
      // card erro de validação do cadastro
      return;
    }
    // criei espaço na memoria para receber as informações que vem da view
    const {nome, email, senha} = this.formularioCadastro.value
    this.autenticacaoFirebaseService.cadastrarUsuario(nome, email, senha).pipe(
      this.toast.observe({
        success: 'Cadastro executado, bem-vindo(a) ao Bookshelf.',
        loading: 'Enviando informações...',
        error: ({ message }) => `Houve um problema: #BS${message}`,
      })
    ).subscribe(() => {
      this.rotas.navigate(['/']) // quando termina, ele é enviado para a rota base
    })
  }

  ngOnInit(): void {
  }

}
