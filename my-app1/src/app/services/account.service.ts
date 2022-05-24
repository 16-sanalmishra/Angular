export class AccountService {
    onDelete(id: number) {
      this.accounts.splice(id,1);
    }
    accounts = [
      {
        name: 'Master Account',
        status: 'Active',
      },
      {
        name: 'Test Account',
        status: 'InActive',
      },
      {
        name: 'Hidden Account',
        status: 'Unknown',
      },
    ];
  
    addAccount(name: string, status: string) {
      this.accounts.push({ name: name, status: status });
    }
  
    updateStatus(id: number, status: string) {
      this.accounts[id].status = status;
    }
  }