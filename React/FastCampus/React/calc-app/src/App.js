import { Component } from 'react';
import "./App.css";   // CSS 파일을 import 해야 app.css에서 작성한 스타일이 적용된다.
import ExpenseForm from './components/ExpenseForm';  // ExpenseForm 컴포넌트를 import 한다.
import ExpenseList from './components/ExpenseList';  // ExpenseList 컴포넌트를 import 한다.

class App extends Component {
  //* state 생성하기
  constructor(props) {
    super(props);
    this.state = {
      expense: [
        { id: 1, charge: '렌트비', amount: 1010 },
        { id: 2, charge: '교통비', amount: 2400 },
        { id: 3, charge: '식비', amount: 3600 },
      ]
    }
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expense.filter(expense => expense.id !== id)
    console.log(newExpenses);
    // this.setState를 이용하여 state 업데이트 하기 => 리렌더링 시키기
    // this.setState({업데이트 전 상태 : 업데이트 시킬 상태})
    this.setState({expense: newExpenses})
  }

  render() {
    return (
      <main className='main-container'>
        <h1>예산 계산기</h1>

        <div style={{ width: '100%', background: 'white', padding: '1rem' }}>
          {/* Expense Form */}
          <ExpenseForm />
        </div>

        <div style={{ width: '100%', background: 'white', padding: '1rem' }}>
          {/* Expense List */}
          {/* props로 데이터 전달하기 */}
          <ExpenseList
            initialExpense={this.state.expense}
            //* 함수도 props로 전달할 수 있다.
            handleDelete={this.handleDelete}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={ {fontSize: '2rem' }}>총 지출 : <span>원</span></p>

        </div>

      </main>
    )
  }
}


export default App;