import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
describe('Tests in <LoginScreen/>', () => {

    const contextValue = {
        dispatch: jest.fn(),

    }
    const history = {
        replace: jest.fn()
    }
    let component;
    beforeEach(() => {
        component = render(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={history} />
            </AuthContext.Provider>
        )
    })

    test('should display currently', () => {

        const component = render(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={history} />
            </AuthContext.Provider>
        )

        const el = component.container
        expect(el).toMatchSnapshot()

    });

    test('must perform dispatch and navigation', () => {

        const el = component.container.querySelector('button');
        fireEvent.click(el);
        expect(contextValue.dispatch).toHaveBeenLastCalledWith({
            type: types.login,
            payload: {
                name: "Michael Rodriguez",
            }
        });

        expect(history.replace).toHaveBeenCalledWith('/')
        localStorage.setItem('lastPath', '/dc');
        fireEvent.click(el);
        expect(history.replace).toHaveBeenCalledWith('/dc')


    });

});
