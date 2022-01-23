import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { HeroCard } from '../../../components/heroes/HeroCard';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';


describe('Test on Hero Component', () => {
    test('The necessary props should arrive', () => {
        const hero = {
            id: "dc-batman",
            superhero: "Batman",
            publisher: "DC Comics",
            alter_ego: "Bruce Wayne",
            first_appearance: "Detective Comics #27",
            characters: "Bruce Wayne",
        }
        const component = render(
            <MemoryRouter>
                <HeroCard {...hero} />
            </MemoryRouter>
        );
        component.getByText('Batman')
    })

    // test('clicking the buttons calls event "Más..."', () => {
    //   const hero = {
    //         id: "dc-batman",
    //         superhero: "Batman",
    //         publisher: "DC Comics",
    //         alter_ego: "Bruce Wayne",
    //         first_appearance: "Detective Comics #27",
    //         characters: "Bruce Wayne",
    //   }
        
        
    //     const component = render(
    //         <MemoryRouter>
    //             <HeroCard {...hero} />
    //         </MemoryRouter>
    //     );
    //     const Link = component.getByText('Más...');
    //     expect().toEqual(<a href="/hero/dc-batman">Más...</a>)
        
    // });
    
})
