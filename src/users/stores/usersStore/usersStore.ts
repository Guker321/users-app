import orderBy from 'lodash/orderBy';
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
      usersError: observable,
      filterUsersData: action.bound
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

  filterUsersData(type: string, order: boolean) {
    if (order === true) {
      this.usersData = orderBy(this.usersData, type, 'asc')
  } else {
      this.usersData = orderBy(this.usersData, type, 'desc')
  }
  }
}

export default new UsersStore();
