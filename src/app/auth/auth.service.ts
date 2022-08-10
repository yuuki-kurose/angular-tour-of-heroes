// httpサービスを有効化する
import { HttpClientModule }         from '@angular/common/http';
// HttpClient,HttpHeadersをインポートする
import { HttpClient, HttpHeaders }  from '@angular/common/http';
// import { Observable } from 'rxjs';
// messageservice利用の為インポート
import { MessageService }           from '../message.service';
//　リモートデータサーバーとの通信を再現する為インポート
import { InMemoryDataService }      from '../in-memory-data.service';
// Ngxsのアクション
import { HeroAction }               from '../hero.action';
// アプリケーションの状態管理、actionのマッピング
import { AuthState }                from './auth.state';


export class AuthService {
  // コンストラクタにて注入
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // 頻繁に使用する為、log()でラップする
  private log(message: string) {
    this.messageService.add(`HeroService: ${ message }`);
  }

  private heroesUrl = 'api/heroes';
  
  
}
