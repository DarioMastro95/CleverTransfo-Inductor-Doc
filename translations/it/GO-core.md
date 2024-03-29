# Lamierino GO

### Campi della tabella (Lamierino NO e Lamierino GO)
- **Norm**: codifica del tipo di elemento, da rispettare rigorosamente. In caso si debba aggiungere una nuova tipologia di elementi occorre che vi mettiate in contatto con noi per la scelta del codice. Ecco i  significati delle lettere utilizzate:<br>
A = Induttori monofase DC<br>
B = Induttori monofase AC<br>
C = Induttori trifase<br>
O = Trasformatori monofase<br>
P = Trasformatori trifase<br>
- **Potenza VA**: potenza di dimensionamento dell' elemento in VA.
- **Induzione T**: Induzione di lavoro consigliata.
- **Tratti Avv.Prim**: numero tratti dell’avvolgimento dell'avvolgimento interno (nel caso di induttori sarà il numero dei tratti totale poiché c’è solo un avvolgimento).
- **Canale Avv. Prim**: spessore del canale frontale tra i tratti dell'avvolgimento interno.
- **Tratti Avv.Sec**: numero tratti dell’avvolgimento secondario.
- **Canale Avv. Sec**: spessore del canale frontale tra i tratti dell’avvolgimento esterno. Questo canale viene utilizzato anche tra il primario e il secondario. Se ci fossero più secondari prenderebbero i dati del primo secondario.
- **H Avvolgimento**: Altezza netta degli avvolgimenti (tutti gli avvolgimenti vengono impostati a uguale altezza).
- **Sez. Nucleo cm2**: sezione del nucleo (colonna) che si calcola in questo modo: **Larghezza Lamierino x Spessore Nucleo x 0.97**. <br>
**0.97** permette di ottenere la sezione reale, dedotti gli spazi occupati dall’isolante dei singoli lamierini.
- **Larghezza Lamierino**: Larghezza del lamierino della colonna (Lo spessore del nucleo viene calcolato automaticamente dall’applicazione, partendo dalla sezione del nucleo, tenuto conto della formula sopra riportata).
- **Canale Front. N/B**: canale frontale tra nucleo e avvolgimento.
- **Canale Lat. N/B**: canale Laterale tra nucleo e avvolgimento (l’inserimento dei due valori, frontale e laterale, è interessante soprattutto per gli induttori). Se non esiste canale laterale introdurre 0.
- **L Finestra**: larghezza della finestra. Per larghezza finestra s’intende lo spazio tra le colonne.
- **H Finestra**: altezza finestra. Per altezza finestra s’intende lo spazio tra i due gioghi.
- **Descrizione**: descrizione libera del tipo di elemento. Non viene utilizzata all’interno delle applicazioni e quindi potete scrivere ciò che preferite.