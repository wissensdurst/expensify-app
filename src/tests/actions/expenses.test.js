import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should setup remove expense object', () => {
    const action = removeExpense({ id: 'testing123' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'testing123'
    })
})

test('should setup edit expense object', () => {
    const action = editExpense('abc123', { note: 'some note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'some note'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 10500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expense object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})