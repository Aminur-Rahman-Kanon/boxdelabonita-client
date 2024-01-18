import About from './about';
import { render } from '@testing-library/react';

test('<About />', () => {
    const about = render(<About />);
    //checkng whether it render all its elementd
    expect(about.getByRole('heading', { name: 'Boxdelabonita' })).toBeVisible();
    expect(about.getByAltText('boxdelabonita 1')).toBeVisible();
    expect(about.getByAltText('boxdelabonita 2')).toBeVisible();
    expect(about.getByAltText('boxdelabonita 3')).toBeVisible();
    expect(about.getByRole('heading', { name: 'The Classic' })).toBeVisible();
    expect(about.getByRole('heading', { name: 'The Modern' })).toBeVisible();
    expect(about.getByRole('heading', { name: 'The Innovation' })).toBeVisible();
    expect(about.getByAltText('boxdelabonita story')).toBeVisible();
    expect(about.getByAltText('boxdelabonita co-founder')).toBeVisible();
    expect(about.getByAltText('boxdelabonita manager')).toBeVisible();
    expect(about.getByRole('heading', { name: 'Person 1' })).toBeVisible();
    expect(about.getByRole('heading', { name: 'Person 2' })).toBeVisible();
    expect(about.getByText('Co-Founder')).toBeInTheDocument();
    expect(about.getByText('Manager')).toBeInTheDocument();
    expect(about.getByRole('heading', { name: 'ABOUT BOXDELABONITA' })).toBeVisible();
    expect(about.getByAltText('boxdelabonita mission')).toBeVisible();
    expect(about.getByAltText('boxdelabonita vision')).toBeVisible();
    expect(about.getByAltText('boxdelabonita author')).toBeVisible();
})