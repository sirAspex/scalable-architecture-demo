import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { RestfulGateway } from '../../gateways/restful.gateway';
import { AsyncService } from './../base.async-service';
import { RestfulCommand } from '../../commands/restful.command';

// For command builder take a look at
// +multi-player async-services
@Injectable()
export class GameServer extends AsyncService {
  constructor(private _restfulGateway: RestfulGateway) {
    super();
  }
  process(data: Action) {
    return this._restfulGateway.send(new RestfulCommand(data.payload));
  }
}
