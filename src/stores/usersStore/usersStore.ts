import { makeObservable } from 'mobx';

import service from './usersStore.service';

class UsersStore {
  constructor() {
    makeObservable(this);
  }
}

export default new UsersStore();
