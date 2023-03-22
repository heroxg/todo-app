import {render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import {store} from '../../redux/store';
import Header from './Header'

test('That the date is displayed, when the page renders', () => {
    render(
        <Provider store={store}>
            <Header />
        </Provider>
    )
    const dateElm = screen.getByText(/Date/i);
    expect(dateElm).toBeInTheDocument
})