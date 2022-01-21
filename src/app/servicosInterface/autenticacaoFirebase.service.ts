import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

  cadastrarUsuario(nome: string, email: string, senha: string){

    return from(createUserWithEmailAndPassword(this.usuarioFb, email, senha)).pipe(

      //mapear o user e com o updateProfile especifica o que vc quer do user, no caso o displayName
      switchMap(({user}) => updateProfile(user,{displayName: nome}))
    )
  }
}
