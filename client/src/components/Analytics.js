import React from 'react';
import { Progress } from 'antd';

const Analytics = ({ allTransection }) => {
    const categories = ['salary', 'tip', 'project', 'food', 'movie', 'bills', 'medical', 'fees', 'taxes'];

    // Total transactions
    const totalTransaction = allTransection.length;
    const totalIncomeTransactions = allTransection.filter(transaction => transaction.type === 'income');
    const totalExpenseTransactions = allTransection.filter(transaction => transaction.type === 'expense');
    const totalIncomePercent = (totalIncomeTransactions.length / totalTransaction) * 100;
    const totalExpensePercent = (totalExpenseTransactions.length / totalTransaction) * 100;

    // Total turnover
    const totalTurnover = allTransection.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnover = allTransection
        .filter(transaction => transaction.type === 'income')
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenseTurnover = allTransection
        .filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnoverPercent = (totalIncomeTurnover / totalTurnover) * 100;
    const totalExpenseTurnoverPercent = (totalExpenseTurnover / totalTurnover) * 100;

    return (
        <>
            <div className="row m-3 d-flex justify-content-between gap-3">
                {/* Total Transactions */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Total Transactions: {totalTransaction}
                        </div>
                        <div className="card-body">
                            <h5 className="text-success">Income: {totalIncomeTransactions.length}</h5>
                            <h5 className="text-danger">Expense: {totalExpenseTransactions.length}</h5>
                            <h6>Income Percent: {totalIncomePercent.toFixed(2)}%</h6>
                            <h6>Expense Percent: {totalExpensePercent.toFixed(2)}%</h6>
                            <div>
                                <Progress
                                    type="circle"
                                    strokeColor="green"
                                    className="mx-2"
                                    percent={totalIncomePercent.toFixed(0)}
                                />
                                <Progress
                                    type="circle"
                                    strokeColor="red"
                                    className="mx-2"
                                    percent={totalExpensePercent.toFixed(0)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Turnover */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Total Turnover: {totalTurnover}
                        </div>
                        <div className="card-body">
                            <h5 className="text-success">Income: {totalIncomeTurnover}</h5>
                            <h5 className="text-danger">Expense: {totalExpenseTurnover}</h5>
                            <h6>Income Percent: {totalIncomeTurnoverPercent.toFixed(2)}%</h6>
                            <h6>Expense Percent: {totalExpenseTurnoverPercent.toFixed(2)}%</h6>
                            <div>
                                <Progress
                                    type="circle"
                                    strokeColor="green"
                                    className="mx-2"
                                    percent={totalIncomeTurnoverPercent.toFixed(0)}
                                />
                                <Progress
                                    type="circle"
                                    strokeColor="red"
                                    className="mx-2"
                                    percent={totalExpenseTurnoverPercent.toFixed(0)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Categorywise Income and Expense side by side */}
            <div className="row mt-3">
                {/* Categorywise Income */}
                <div className="col-md-6">
                    <h4>Categorywise Income</h4>
                    {
                        categories.map(category => {
                            const incomeAmount = allTransection
                                .filter(transaction => transaction.type === 'income' && transaction.category === category)
                                .reduce((acc, transaction) => acc + transaction.amount, 0);
                            const incomePercent = incomeAmount > 0 ? (incomeAmount / totalIncomeTurnover) * 100 : 0;
                            return (
                                <div className="card" key={category}>
                                    <div className="card-body">
                                        <h5>{category}</h5>
                                        <Progress 
                                            percent={incomePercent.toFixed(0)} 
                                            strokeColor="green" 
                                        />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                {/* Categorywise Expense */}
                <div className="col-md-6">
                    <h4>Categorywise Expense</h4>
                    {
                        categories.map(category => {
                            const expenseAmount = allTransection
                                .filter(transaction => transaction.type === 'expense' && transaction.category === category)
                                .reduce((acc, transaction) => acc + transaction.amount, 0);
                            const expensePercent = expenseAmount > 0 ? (expenseAmount / totalExpenseTurnover) * 100 : 0;
                            return (
                                <div className="card" key={category}>
                                    <div className="card-body">
                                        <h5>{category}</h5>
                                        <Progress 
                                            percent={expensePercent.toFixed(0)} 
                                            strokeColor="red" 
                                        />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Analytics;
