# Staffe di serraggio

## Introduzione
Le staffe di serraggio inserite in questa tabella si utilizzano nell'assiemaggio degli elementi su lamierino stampato.<br> 
Nel disegno sopra è rappresentata una staffa a L a titolo esempio. In realtà in questa tabella è possibile inserire qualsiasi forma di staffa. Il codice sarà il discriminante. L’obiettivo di questa tabella è fornire sia le sporgenze delle staffe rispetto all’ingombro dell'elemento nudo, sia e le dimensioni di fissaggio, per poter calcolare correttamente le dimensioni d’ingombro finali e le dimensioni di fissaggio dell’elemento stesso.


<img src="img/StaffeDi Serraggio.png" height="250px">

### Campi della tabella (Staffe)
- **Lamierino**: tipo di lamierino compatibile.<br>
***Esempi: 
EI oppure EIT (trifase) o UI (per elementi a due colonne).***
- **Lunghezza**: lunghezza del lamierino per cui la staffa é utilizzabile.<br>
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
- **Fiss_L**: quota di fissaggio dell’elemento nel senso della larghezza.
- **Fiss_B**: quota di fissaggio dell’elemento nel senso della profondità da imputare a una singola staffa. Serve per calcolare la quota di fissaggio dell’elemento in profondità.<br>
***Esempio:<br>
Fissaggio_B = 15 <br>
Spessore nucleo = 70<br>
Quota di fissaggio elemento in profondità = 2x15 + 70 = 100.***

- **Asola_L**: dimensione **L** dell’asola ospitata dalla staffa (nel senso della larghezza).
- **Asola_B**: dimensione **B**  dell’asola ospitata dalla staffa (nel senso della profondità).
- **Peso kg**: valore normalmente dato dal fornitore. Altrimenti potete calcolarlo in questo modo:  volume x 7.65 (peso specifico dell’acciaio).
- **Articolo**: inserire il codice articolo che questo materiale ha assunto nel vostro sistema gestionale. Questo valore permetterà alle applicazioni di recuperare la descrizione e il costo unitario sulla tabella “Costo unitario Materiali” nella quale viene importata la lista dei materiali presenti nel vostro magazzino.
