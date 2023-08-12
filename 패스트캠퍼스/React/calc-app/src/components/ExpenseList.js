import React, { Component } from 'react'
import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem"

export class ExpenseList extends Component {
  render() {
    return (
      // div로 감싸는게 싫다면 <React.Fragment>로 감싸면 된다.
      // 또는 그냥 <></>로 감싸도 된다.
      <React.Fragment>
        <ul className='list'>
          {/* Expense Item */}
          <ExpenseItem />
        </ul>
        <button className='btn'>
          목록 지우기
        </button>
      </React.Fragment>

    )
  }
}

export default ExpenseList