import { Evento } from "../models/Evento";

export class EventosService {
    
    static eventos: Evento[] = [
        {
          'nombre' : 'Cosquín Rock 2019',
          'lugar' : 'Aeroclub Santa María de Punilla',
          'fecha' : '02-10-2019'
        },
        {
          'nombre':'Arctic Monkeys en Argentina',
          'lugar':'Hipódromo de San Isidro',
          'fecha':'03-30-2019'
        },
        {
          'nombre':'Lollapalooza Argentina',
          'lugar':'Hipódromo de San Isidro',
          'fecha':'04-05-2019'
        },
        {
          'nombre':'Iron Maiden en Argentina',
          'lugar':'Estadio Vélez Sársfield',
          'fecha':'10-12-2019'
        }
    ]
}
