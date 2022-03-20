import orderBy from 'lodash/orderBy';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { UsersModel } from '../../models';

import service from './usersStore.service';

class UsersStore {
  usersData: UsersModel[] = [];

  usersLoading = true;

  usersError = '';

  currentUser: UsersModel | undefined;

  currentUserIsLoading = true;

  currentUserError = '';

  constructor() {
    this.getUsers();
    makeObservable(this, {
      usersData: observable,
      getUsers: action,
      usersLoading: observable,
      usersError: observable,
      filterUsersData: action.bound,
      currentUser: observable,
      getCurrentUser: action.bound,
      currentUserIsLoading: observable,
      currentUserError: observable,
    });
  }

  async getUsers() {
    try {
      const response = await service.getUsersData();
      runInAction(() => {
        this.usersData = response;
      });
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) {
        message = error.message;
      }
      runInAction(() => {
        this.usersError = message;
      });
    } finally {
      runInAction(() => {
        this.usersLoading = false;
      });
    }
  }

  filterUsersData(type: string, order: boolean) {
    if (order === true) {
      this.usersData = orderBy(this.usersData, type, 'asc');
    } else {
      this.usersData = orderBy(this.usersData, type, 'desc');
    }
  }

  async getCurrentUser(id: number) {
    try {
      const response = await service.getCurrentUser(id);
      runInAction(() => {
          this.currentUser = response;
      });
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) {
        message = error.message;
      }
      this.currentUserError = message;
    } finally {
      runInAction(() => {
        this.currentUserIsLoading = false;
      });
    }
  }
}

export default new UsersStore();
