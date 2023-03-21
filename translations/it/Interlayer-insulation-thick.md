# Isolamento interstrato

## Introduzione
Questa tabella viene utilizzata unicamente nelle applicazioni Clever Small-T e Clever Small-I per scegliere automaticamente lo spessore degli isolanti interstrato e tra avvolgimenti.
Gli spessore scelti automaticamente, all’interno di un progetto, possono essere modificati manualmente.

### Campi della tabella (Isolamento interstrato)
- **Classe temperatura**: classe di temperatura dell’elemento (A-E-B-F-H).
- **Materiale conduttore**: materiale del conduttore.<br>
0 = Alluminio<br>
1 = Rame<br>
- **Tipo conduttore**: inserire il tipo conduttore secondo il codice seguente: <br>
1 = Conduttore piatto <br>
2 = Nastro<br>
3 = Filo<br>
4 = Conduttore multi-filare<br>
- **Nr. conduttori // radiale**: numero dei conduttori in parallelo radiale. A parità di spessore, lo spessore dell’isolante generalmente deve essere aumentato se ci sono più conduttori in // radiale.
- **Spess. conduttore**: spessore del singolo conduttore. 
- **Spess. isolante**: spessore dell’isolante idoneo. Non si fanno distinzioni tra i vari materiali isolanti perché il problema prevalentemente meccanico.
- **Indice**: valore necessario al software.
Qualora si debba aggiungere una riga procedere come segue:
    - **Ordinare la tabella per indice per scoprire l’ultimo numero**
    - **Inserire come indice il numero successivo**
