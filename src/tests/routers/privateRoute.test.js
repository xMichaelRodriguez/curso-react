import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {  render } from '@testing-library/react';
import { PrivateRoutes } from '../../routers/PrivateRoutes';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('first', () => {
    const props = {
        location: {
            pathname: '/dc'
        }
    }
    Storage.prototype.setItem = jest.fn();

    test('should show the component <PrivateRoutes /> is authenticated and save on localStorage', () => {
        const component = render(
            // memoryrouter es un height order component para poder hacer ciertas
            // pruebas con routers 
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props} />
            </MemoryRouter>
        )
        component.getByText('Listo!');

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc');
    });


    test('should block the component if not is authenticated', () => {
        const component = render(
            // memoryrouter es un height order component para poder hacer ciertas
            // pruebas con routers 
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props} />
            </MemoryRouter>
        );

        
        const el = component.container.querySelector('span');

        expect(el).toBe(null);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc');
    });


});
