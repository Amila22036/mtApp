import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiAiClient} from 'api-ai-javascript';
import {Observable} from 'rxjs/observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


export class message{
  constructor(public content:string,public sentby:string){}
}

@Injectable()
export class ChatService {
  readonly token = environment.dialogflow.EasyTravelAssistant;
  readonly client = new ApiAiClient( {accessToken:'a8780afe30a7493284d6fe4080bdd6d4'});
  conversation = new BehaviorSubject<message[]>([]);

  constructor() { }

  update(msg: message){
    this.conversation.next([msg]);
  }

  converse(msg:string){
      const userMessage = new message(msg,'user'); 
      this.update(userMessage);

      return this.client.textRequest(msg)
      .then(res => {
        const speech =res.result.fulfillment.speech;
        const botMessage = new message(speech,'bot');
        this.update(botMessage);
      })
  }

}
