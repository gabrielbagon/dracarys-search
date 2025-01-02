import { render, screen, fireEvent } from '@testing-library/react';
import DragonCard from '../DragonCard'; 

describe('DragonCard', () => {
    const dragon = { id: '1', name: 'Fire Drake', type: 'Fire' };
    const mockOnDelete = jest.fn();

    it('must render the dragon name and type', () => {
        render(<DragonCard dragon={dragon} onDelete={mockOnDelete} />);
        expect(screen.getByText('Fire Drake')).toBeInTheDocument();
        expect(screen.getByText('Type: Fire')).toBeInTheDocument();
    });

    it('should call onDelete when the “Remove” button is clicked', () => {
        render(<DragonCard dragon={dragon} onDelete={mockOnDelete} />);
        const button = screen.getByText('Remove');
        fireEvent.click(button);
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
        expect(mockOnDelete).toHaveBeenCalledWith(dragon.id);
    });
});
