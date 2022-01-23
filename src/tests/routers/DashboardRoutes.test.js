import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Test in the <DashboardRoutes/>', () => {

    test('should display correctly', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: "MichaelRodriguez"
            }
        }
        const component = render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(component).toMatchSnapshot();
        component.getByText('MichaelRodriguez')
    });

});
