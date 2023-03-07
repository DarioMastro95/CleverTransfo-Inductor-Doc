# Staffe di serraggio

## Introduzione
I morsetti si utilizzano nelle applicazioni Clever Transfo e Clever Le staffe di serraggio inserite in questa tabella si utilizzano per assiemare gli elementi su lamierino stampato. 
Nel disegno sopra è rappresentata una staffa a L a titolo. In realtà in questa tabella è possibile inserire qualsiasi forma di staffa. Il codice sarà il discriminante. L’obiettivo di questa tabella è fornire le sporgenze delle staffe dall’elemento per poter calcolare correttamente le dimensioni d’ingombro dell’elemento stesso.


<img src="img/StaffeDi Serraggio.png" height="150px">

### Campi della tabella (Staffe)
- **Lamierino**: tipo di lamierino compatibile.<br>
***Esempi: 
EI oppure EIT (trifase) o UI (per elementi a due colonne).***
- **Lunghezza**: lunghezza del lamierino relativa alla specifica staffa.<br>
***Esempio: 
Se si tratta di un EI120 qui si inserirà 120.***
- **Descrizione**: descrizione della staffa che può essere di aiuto per il riconoscimento della stessa.
- **Codice**: codice identificativo della staffa. Qui di seguito l’elenco dei codici normalmente utilizzati:<br>
ANG = Staffa a L<br>
PMP = Piatto portamorsetti<br>
PM = Piatto<br>
TEL = Telaio con foro passante<br>
TELF = Telaio con foro filettato<br>
Per ulteriori forme occorre contattarci per scegliere i codici corretti.
- **Materiale**: sigla del materiale. Aprendo il menu a tendina del campo Materiale vedete l’elenco di tutti i materiali disponibili e potete scegliere la sigla corretta.
- **Sporgenza_A**: sporgenza della staffa rispetto alla larghezza dell’elemento.
- **Sporgenza_B**: sporgenza della staffa rispetto alla profondità dell’elemento.
- **Sporgenza_H**: sporgenza della staffa rispetto all’altezza dell’elemento.
- **Fissaggio_L**: quota di fissaggio dell’elemento nel senso della larghezza.
- **Fissaggio_B**: quota di fissaggio dell’elemento nel senso della profondità da imputare a una singola staffa. Serve per calcolare la quota di fissaggio dell’elemento in profondità.<br>
***Esempio:<br>
Fissaggio_B = 15 <br>
Spessore nucleo = 70<br>
Quota di fissaggio elemento in profondità = 2x15 + 70 = 100.***

- **Asola_L**: dimensione L dell’asola ospitata dalla staffa (nel senso della larghezza).
- **Asola_B**: dimensione L dell’asola ospitata dalla staffa (nel senso della profondità).
- **Peso kg**: valore normalmente dato dal fornitore. Altrimenti calcolare con volume x 7.65 (peso specifico dell’acciaio).
- **Articolo**: inserire il codice articolo che questo materiale ha assunto nel vostro sistema gestionale. Questo valore permetterà alle applicazioni di recuperare la descrizione e il costo unitario sulla tabella “Costo unitario Materiali” nella quale viene importata la lista dei materiali presenti nel vostro magazzino.
