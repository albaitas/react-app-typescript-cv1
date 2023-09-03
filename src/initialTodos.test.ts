import { getInitialTodos } from './initialTodos';

describe('getIntialTodos', function () {
  it('return initial items', () => {
    const result = getInitialTodos();
    expect(result).toEqual([
      { id: 3, text: 'Live show', completed: false },
      { id: 2, text: 'Copilot best practices', completed: true },
      { id: 1, text: 'Learn basic info about Copilot', completed: true },
    ]);
  });
});
