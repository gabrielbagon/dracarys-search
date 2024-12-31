import { render, screen, fireEvent } from '@testing-library/react';
import DragonCard from '../DragonCard'; // Importar o componente relativo à pasta

describe('DragonCard', () => {
    const dragon = { id: '1', name: 'Fire Drake', type: 'Fire' };
    const mockOnDelete = jest.fn();

    it('deve renderizar o nome e o tipo do dragão', () => {
        render(<DragonCard dragon={dragon} onDelete={mockOnDelete} />);
        expect(screen.getByText('Fire Drake')).toBeInTheDocument();
        expect(screen.getByText('Tipo: Fire')).toBeInTheDocument();
    });

    it('deve chamar onDelete quando o botão "Remover" for clicado', () => {
        render(<DragonCard dragon={dragon} onDelete={mockOnDelete} />);
        const button = screen.getByText('Remover');
        fireEvent.click(button);
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
        expect(mockOnDelete).toHaveBeenCalledWith(dragon.id);
    });
});
