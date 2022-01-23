import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {   render } from '@testing-library/react';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';


describe('Test on component <AppRouter />', () => {
    
    test('It should show the login component if you are not authenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }
        const component = render(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        const el = component.container;
           
        expect(el).toMatchSnapshot()
  
    });
    test('It should show the marvel component if you are  authenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name:"Michael Rodriguez"
            }
        }
        const component = render(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        
       component.getByText('Asociaciones')  
       
  
    });
    
});
