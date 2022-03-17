import { action, makeObservable, observable, runInAction } from 'mobx';
import { UsersModel } from '../../models';

import service from './usersStore.service';

class UsersStore {
  usersData: UsersModel[] = [];

  usersLoading = false;

  usersError = '';

  constructor() {
    this.getUsers();
    makeObservable(this,{
      usersData: observable,
      getUsers: action,
      usersLoading: observable,
      usersError: observable
    });
  }

  async getUsers() {
      try {
      this.usersLoading = true;
      const response = await service.getUsersData();
      runInAction(() => {
        this.usersData = response;
      });
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) {
        message = error.message;
      }
      this.usersError = message;
    } finally {
      runInAction(() => {
        this.usersLoading = false;
      });
    }
  }
}

export default new UsersStore();
