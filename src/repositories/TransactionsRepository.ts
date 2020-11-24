import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO

    const { income, outcome } = this.transactions.reduce(
      (acumulator: Balance, valorAtual: Transaction) => {
        if (valorAtual.type === 'income') {
          acumulator.income += valorAtual.value;
        } else if (valorAtual.type === 'outcome') {
          acumulator.outcome += valorAtual.value;
        }

        return acumulator;
      },
      { income: 0, outcome: 0, total: 0 },
    );

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transation = new Transaction({ title, value, type });

    this.transactions.push(transation);

    return transation;
  }
}

export default TransactionsRepository;
