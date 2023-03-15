# Conduttori

## Introduzione
In questa tabella sono stati inseriti tutti i tipi di conduttore (filo, conduttore piatto, nastro) nei due materiali AL e CU.

### Campi della tabella (Bussole)
- **Dim. Assiale**: in caso di filo inserire il diametro nudo, in caso di conduttore piatto o nastro inserire la dimensione assiale.
- **Dim. Radiale**: in caso di filo inserire il diametro isolato, in caso di conduttore piatto o nastro inserire la dimensione radiale.
- **Sezione mm2**: inserire la sezione netta, possibilmente ricavata dalla tabella del fornitore. Se non fosse possibile, nel caso del conduttore piatto la sezione netta si calcola nel modo seguente:
  1. Caso spessore radiale <= 2.24 <br>Sezione = Dim. Assiale x Dim. Radiale – 0.363
  2. Caso spessore radiale > 2.24 <br>
    Sezione = Dim. Assiale x Dim. Radiale – 0.55

  Per filo e Nastro invece si calcola l’area precisa.

- **Peso/metro**: si consiglia di ricavare questo parametro dalle tabelle del fornitore. Altrimenti occorre calcolarlo a partire dalla sezione e dal peso specifico (CU = 8,90 kg/dm3  AL = 2,70 kg/dm3).
- **R/metro Ohm**: si consiglia di ricavare questo parametro dalle tabelle del fornitore. Altrimenti occorre calcolarlo a partire dalla sezione e dalla resistenza specifica (CU = 0,00175  &#8486;/m  AL = 0 ,0028  &#8486;/m).
- **Codice**: questo codice definisce completamente il conduttore sia come tipo che come materiale.<br>Inserire:

| Codice | Materiale            |
|--------|----------------------|
| B3     | Nastro AL            |
| B4     | Nastro CU              |
| P3     | Conduttore piatto AL |
| P4     | Conduttore piatto CU |
| F3     | Filo AL	 |
| F4     | Filo CU  |
  
- **Articolo**: inserire il codice articolo che questo materiale ha assunto nel vostro sistema gestionale. Questo valore permetterà alle applicazioni di recuperare la descrizione e il costo unitario sulla tabella “Costo unitario Materiali” nella quale viene importata la lista dei materiali presenti nel vostro magazzino.