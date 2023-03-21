# Misure carpenteria

## Introduzione
Questa è una tabella misura/valore che permette di inserire, per ciascuna carpenteria, ciascun componente, ciascuna misura e il valore della misura stessa per ogni larghezza lamierino.
Nello standard si copre il range di lamierini da 40 a 200, con un incremento di 5 mm.
È ovviamente possibile inserire tutti i lamierini in uso, anche inferiori a 40 e/o superiori a 200. La possibilità di ordinare la tabella per qualsiasi colonna, (anche con selezioni multiple, tenendo premuto il tasto CTRL mentre si selezionano le varie colonne) rende facile l’inserimento e il controllo dei valori.
In caso di aggiunta di un lamierino, occorre inserire valori per tutte le quote che identificano ogni componente della carpenteria interessata.
In caso di necessità di modifica di valori esistenti, occorre individuare la zona della tabella, utilizzando il filtro in alto a sinistra e l’ordinamento (click sull’intestazione della colonna), quindi modificare direttamente i dati.
Osservando la tabella e ordinandola per carpenteria + componente + lamierino sarà chiara a tutti la logica seguita.

### Campi della tabella (Misure carpenteria)

- **Carpenteria**: tipo di carpenteria, scelto tra i tipi elencati nel menu a tendina della videata di ingresso dati sotto l’etichetta  ***“carpenteria”.***
- **Elemento**: codice del componente che fa parte di quella carpenteria. I codici sono assegnati durante l’implementazione di quella carpenteria nel software e **non devono essere modificati.**
- **Misura**: nome della misura alla quale si attribuirà valore in questa riga. 
***Esempio: L*** 
- **Valore**: valore che si desidera attribuire a quella misura. Occorre inserire un valore soltanto se è fisso, ossia dipende esclusivamente dalla larghezza del lamierino. Inserire 0 se un campo (ad esempio la larghezza di un profilo) dipende da parametri variabili a seconda del progetto. Sarà la regola di progetto che, durante il calcolo attribuirà il valore corretto a questo parametro.
Larghezza lamierino:
Larghezza del lamierino per cui è valido il valore attribuito.
- **Nr. fasi**: numero delle fasi per cui è valido il valore attribuito.
- **L1**: campo per usi futuri: inserire 0.
- **L2**: campo per usi futuri: inserire 0.
- **Calcolato?**: inserire ***“False”*** se è stato inserito un valore nel campo **Valore.**
Inserire ***“True”*** se è stato inserito 0 nel campo **Valore.**
