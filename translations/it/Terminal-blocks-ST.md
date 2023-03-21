# Morsetti ST

## Introduzione
Questa tabella contiene i morsetti si utilizzano nelle applicazioni Clever Small-T e Clever Small-I, come terminali d’uscita quando la corrente o altri parametri ne permettono l’uso. Si noti che questa tabella non è valida per le applicazioni **Clever Transfo e Clever Inductor** che utilizzano la tabella **Morsetti**.
I morsetti possono essere fissati direttamente ai profili di serraggio (morsetti in liste) oppure su un binario che a sua volta verrà fissato al profilo, come nel disegno sopra riportato.
Esistono svariati tipi di morsetto e la tabella consente di distinguerli tramite il campo **Codice**.
<img src="img/MorsettiST.png" height="250px">

### Campi della tabella (Morsetti ST)

- **Categoria**: definisce su quale categoria di elementi è possibile utilizzare il morsetto. Se il morsetto può essere utilizzato per più di una categoria occorre elencarle tutte, separandole con un trattino al centro.<br>
***Esempio: 
UL-GENERICO***.
- **Conduttore**: materiale conduttore ammesso. Se sono ammessi sia a alluminio sia rame occorre inserire CUAL altrimenti la sigla di un solo conduttore.
- **Nr. poli**: vale per i morsetti multipolari. È importante inserire questa informazione per il calcolo dell’ingombro dei morsetti sul profilo di serraggio.
- **I Nominale A**: corrente massima supportata.
- **UL Tens. nom V**: tensione supportata in caso di categoria UL
- **Tens. nom V**: tensione supportata per le altre categorie.
- **Sezione in mm2**: sezione nominale utile. Si riferisce alla sezione massima del conduttore che vi verrà inserito.
- **Larghezza**: spessore del singolo morsetto (Dimensione B nel disegno).
- **Altezza**: altezza del morsetto (Dimensione H nel disegno)
- **Lunghezza**: lunghezza massima del morsetto (Dimensione L nel disegno).
- **Diametro foro**: diametro del foro d’entrata dei conduttori.
- **Codice**: sigla con la quale viene identificato la tipologia di morsetto.<br>
***Esempio:
Binario = Morsetto su binario Omega.***
Se in fase di personalizzazione occorre utilizzare altri tipi di morsetto, vi preghiamo di contattarci per la scelta del codice.
- **Tipo**: sigla con la quale viene identificato il morsetto (può essere la sigla del fornitore).
- **Articolo**: inserire il codice articolo che questo materiale ha assunto nel vostro sistema gestionale. Questo valore permetterà alle applicazioni di recuperare la descrizione e il costo unitario sulla tabella “Costo unitario Materiali” nella quale viene importata la lista dei materiali presenti nel vostro magazzino.
