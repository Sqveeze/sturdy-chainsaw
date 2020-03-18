import React from 'react';
import styled from 'styled-components';

const ArrayOperations = () => {
  const [groupedTransactions, setGroupedTransactions] = React.useState({});
  const [transactions, setTransactions] = React.useState([
    { title: 'Einkauf Rewe', amount: -15.20, currency: '€', date: '2019-01-16' },
    { title: 'Saturn Soundbar', amount: -149.99, currency: '€', date: '2019-01-15' },
    { title: 'Einkauf Edeka', amount: -35.50, currency: '€', date: '2018-12-29' },
    { title: 'Einkauf Rewe', amount: -15.20, currency: '€', date: '2018-12-29' },
    { title: 'Saturn Soundbar', amount: -159.99, currency: '€', date: '2018-12-29' },
    { title: 'Geldautomat Königsstraße 56', amount: -100.00, currency: '€', date: '2018-12-29' },
    { title: 'Geldautomat HBF', amount: -100.00, currency: '€', date: '2019-01-09' },
    { title: 'Einkauf Rewe', amount: -50.20, currency: '€', date: '2019-01-09' },
    { title: 'Steak', amount: 30.00, currency: '€', date: '2019-01-09' },
    { title: 'Maredo Stuttgart', amount: -65.00, currency: '€', date: '2019-01-09' },
    { title: 'Beteiligung Urlaub', amount: 250.00, currency: '€', date: '2019-01-09' },
    { title: 'Einkauf Rewe', amount: -25.30, currency: '€', date: '2019-01-08' },
    { title: 'Einkauf Edeka', amount: -15.67, currency: '€', date: '2019-01-08' },
    { title: 'Gehalt', amount: 2800.00, currency: '€', date: '2019-01-14' },
    { title: 'Geldautomat Königsstraße 56', amount: -100.00, currency: '€', date: '2019-01-13' },
    { title: 'Einkauf Rewe', amount: -25.30, currency: '€', date: '2019-01-01' },
    { title: 'Einkauf Edeka', amount: -15.67, currency: '€', date: '2019-01-01' },
    { title: 'König X', amount: -33.00, currency: '€', date: '2019-01-01' },
    { title: 'Outdoor Ausrüstung', amount: -333.00, currency: '€', date: '2019-01-01' },
    { title: 'Einkauf Rewe', amount: -50.20, currency: '€', date: '2019-01-01' },
    { title: 'Danke fürs leihen!', amount: 30.00, currency: '€', date: '2019-01-01' }, // 01-0 ?
    { title: 'Wochenkarte VVS ', amount: -22.00, currency: '€', date: '2019-01-01' },
    { title: 'König X', amount: -12.00, currency: '€', date: '2019-01-13' },
    { title: 'Bonus Schadenfrei', amount: 150.00, currency: '€', date: '2019-01-12' },
    { title: 'Telekom Februar', amount: -14.00, currency: '€', date: '2019-01-12' },
    { title: 'Telekom Februar', amount: -4.00, currency: '€', date: '2019-01-12' },
    { title: 'Einzahlung Sparkonto', amount: -500.00, currency: '€', date: '2019-01-11' },
    { title: 'Kreditauszahlung', amount: 5000.00, currency: '€', date: '2019-01-11' },
    { title: 'Versicherung', amount: -56.20, currency: '€', date: '2019-01-20' },
    { title: 'Bosch Ofen', amount: -419.90, currency: '€', date: '2019-01-19'},
    { title: 'Nachzahlung Telekom', amount: -24.00, currency: '€', date: '2019-01-18'},
    { title: 'Zalando', amount: -35.50, currency: '€', date: '2019-01-17' },
    { title: 'Einkauf Edeka', amount: -35.50, currency: '€', date: '2019-01-17'},
    { title: 'Saturn Soundbar', amount: -159.99, currency: '€', date: '2019-01-16' },
    { title: 'Telekom Februar', amount: -3.00, currency: '€', date: '2019-01-11' },
    { title: 'Telekom Februar', amount: -3.00, currency: '€', date: '2019-01-10' },
    { title: 'Gehalt Februar', amount: 2800.00, currency: '€', date: '2019-01-10' },
    { title: 'Schwarz Weiß Bar', amount: -33.00, currency: '€', date: '2019-01-08' },
    { title: 'Aral Tankstelle', amount: -76.80, currency: '€', date: '2019-01-08' },
    { title: 'Einkauf Edeka', amount: -35.50, currency: '€', date: '2019-01-08' },
    { title: 'Schwarz Weiß Bar', amount: -25.00, currency: '€', date: '2019-01-01' },
    { title: 'Einkauf Rewe', amount: -25.30, currency: '€', date: '2019-01-01' },
    { title: 'Einkauf Edeka', amount: -15.67, currency: '€', date: '2019-01-01' },  
    { title: 'König X', amount: -12.00, currency: '€', date: '2018-12-29' },
    { title: 'VersicherungsNR AZW-121', amount: 55.00, currency: '€', date: '2018-12-29' },
    { title: 'Telekom Februar', amount: -24.00, currency: '€', date: '2018-12-29' },
    { title: 'Einzahlung Sparkonto', amount: -100.00, currency: '€', date: '2019-12-20' },
    { title: 'Wochenkarte VVS ', amount: -22.00, currency: '€', date: '2019-12-20' },
  ]);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  React.useEffect(() => {
    const arr = [];

    transactions.forEach((tr) => {
      const itm = {
        ...tr,
      };
      let id = rand(1000, 9999);
      let check = transactions.filter((i) => i.uniqueId && i.uniqueId === id);
      while (check.length > 0) {
        id = rand(1000, 9999);;
        check = transactions.filter((i) => i.uniqueId && i.uniqueId === id);
      }
      itm.uniqueId = id;
      arr.push(itm);
    });

    const sort = arr.sort((a, b) => new Date(b.date) - new Date(a.date));

    setTransactions(sort);

    const groups = {};

    transactions.forEach((tr) => {
      const year = new Date(tr.date).getFullYear();
      const month = new Date(tr.date).getMonth();

      if (!groups[year]) {
        groups[year] = [];
      }

      const checkMonth = groups[year].filter((gr) => gr.month === month);

      if (checkMonth.length > 0) {
        groups[year].map((it) => {
          if (it.month === month) {
            if (tr.amount > 0) {
              it.total += tr.amount;
              it.income += tr.amount;
            } else {
              it.total -= tr.amount;
              it.expense += tr.amount;
            }
          }
          return it;
        });
      } else {
        groups[year].push({
          month,
          total: tr.amount,
          expense: tr.amount > 0 ? 0 : tr.amount,
          income: tr.amount > 0 ? tr.amount : 0,
        });
      }
    });
    setGroupedTransactions(groups);
  }, []);

  const displayMonth = (number) => {
    switch(number) {
      case 0:
        return 'January';
      case 11:
        return 'December';
      default:
        return 'unknown';
    }
  };

  return (
    <React.Fragment>
      <table>
        <thead>
        <tr>
          <th>UniqueID</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {
          transactions.map((item, index) => {
            return (
              <tr key={`${index}_${item.date}`}>
                <td>{item.uniqueId ? item.uniqueId : null}</td>
                <td>{item.title}</td>
                <StyledTd amount={item.amount}>{item.amount}</StyledTd>
                <td>{item.currency}</td>
                <td>{item.date}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Total</th>
          <th>Expense</th>
          <th>Income</th>
        </tr>
        </thead>
        <tbody>
        {
          Object.keys(groupedTransactions).map((value) => {
            return groupedTransactions[value].map((month) => {
              return (
                <tr key={`${month.total}_${month.expense}`}>
                  <td>{value} {displayMonth(month.month)}</td>
                  <StyledTd amount={month.total}>{month.total}</StyledTd>
                  <StyledTd amount={month.expense}>{month.expense}</StyledTd>
                  <StyledTd amount={month.income}>{month.income}</StyledTd>
                </tr>
              )
            })
          })
        }
        </tbody>
      </table>
    </React.Fragment>
  );
};

const StyledTd = styled.td`
  color: ${props => props.amount > 0 ? 'green' : 'red'};
`;

export default ArrayOperations;
