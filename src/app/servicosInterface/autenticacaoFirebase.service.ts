import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authState } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoFirebaseService {

  // público para ser usado na exportação interna, no navegação.ts
  usuarioLogado$ = authState(this.usuarioFb)

  constructor(private usuarioFb: Auth) { }

  loginUsuario(usuarioEmail: string, usuarioSenha: string){
    return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha))
  }

  sairLogin(){
    return from(this.usuarioFb.signOut())
  }

}
