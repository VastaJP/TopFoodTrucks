import { Evento } from './Evento';

describe('Evento', () => {
  it('should create an instance', () => {
    expect(new Evento('nombrePrueba','lugarPrueba','fechaPrueba')).toBeTruthy();
  });
});
