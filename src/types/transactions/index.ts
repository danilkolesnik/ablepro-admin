export interface TransactionStateProps {
  transactions: Transaction[];
  users: User[];
  error?: object | string | null;
}

export interface Transaction {
  sum: number | null;
  status: string;
  transaction: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
