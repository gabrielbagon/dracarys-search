import { render, screen } from '@testing-library/react';
import DragonList from '../DragonList';

describe('DragonList', () => {
    const dragons = [
        { id: '1', name: 'Fire Drake', type: 'Fire' },
        { id: '2', name: 'Water Wyrm', type: 'Water' },
    ];
    const mockOnDelete = jest.fn();

    it('deve renderizar a lista de dragões', () => {
        render(<DragonList dragons={dragons} onDelete={mockOnDelete} />);
        expect(screen.getByText('Fire Drake')).toBeInTheDocument();
        expect(screen.getByText('Water Wyrm')).toBeInTheDocument();
    });
});
