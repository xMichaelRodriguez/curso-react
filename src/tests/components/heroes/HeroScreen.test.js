import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Test in <HeroScreen />', () => {
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
   
   


    test('should display component redirect or returned a div tag if not have arguments in the URL', () => {
        const component = render(
             <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history } />
            </MemoryRouter>
        );
       
        const el = component.container.querySelector('div');
        expect(el).toBe(null)

    });

    test('should return a hero if the parameter exists and is found', () => {
       const component = render(
             <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
       );
        
        component.getByText('Characters')
    });

    test('should return to the previous screen with the PUSH', () => {
      const history = {
        length: 1,
        push: jest.fn(),
        goBack: jest.fn()
      }
         const component = render(
             <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
         );
        const el = component.getByText('Return');
        fireEvent.click(el);

        expect(history.push).toHaveBeenCalledWith('/')
        expect(history.goBack).not.toHaveBeenCalled()
    });
    
    test('should return to the previous screen with GOBACK', () => {
      const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
      }
         const component = render(
             <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
         );
        const el = component.getByText('Return');
        fireEvent.click(el);

        expect(history.goBack).toHaveBeenCalledTimes(1)
        expect(history.push).not.toHaveBeenCalled()
    });

    test('should call the redirect if the hero not exists', () => {
      const history = {
        length: 1,
        push: jest.fn(),
        goBack: jest.fn()
      }
         const component = render(
             <MemoryRouter initialEntries={['/hero/dc-batman222']}>
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
         );
        const el = component.container.querySelector('div');
        expect(el).toBe(null);
    });
    
});
