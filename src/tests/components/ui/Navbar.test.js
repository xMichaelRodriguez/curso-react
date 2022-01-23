import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent,  render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { Navbar } from '../../../components/ui/Navbar';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';


describe('Test in <Navbar />', () => {
    const historyMock = {
        push: jest.fn(),
        replace:jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),

    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: "Michael Rodriguez"
        }
    }
    let component;
    beforeEach(() => {

        component = render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Router history={historyMock}>
                        <Navbar />

                    </Router>
                </MemoryRouter>
            </AuthContext.Provider>
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    test('should display currently', () => {


        expect(component).toMatchSnapshot();
        component.getByText('Michael Rodriguez');
    });

    test('should calls the logout and use history', () => {

        const el = component.getByText('Logout');
        expect(el).toHaveClass('btn')
        fireEvent.click(el);
        expect(contextValue.dispatch).toHaveBeenLastCalledWith({ type: types.logout });
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    });



});
