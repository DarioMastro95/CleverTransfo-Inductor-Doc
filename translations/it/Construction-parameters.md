# Parametri costruttivi
## Introduzione

Sotto parametri costruttivi si trovano tutte le tabelle che definiscono i parametri da utilizzare per progettare ogni tipo di elemento in modo ottimizzato.<br>
**Nella versione PROFESSIONAL di Clever Suite, ricevete tabelle con valori standard che possono essere anche lontani dai proporzionamenti che utilizzate nella vostra azienda, perché l’ottimizzazione dipende spesso dalle condizioni economiche, geografiche e temporali con le quali la vostra azienda si confronta.**
È molto importante quindi confrontare questi dati con la vostra ottimizzazione interna e valutare attentamente i valori da inserire allo scopo di ottenere, per i vari tipi di elemento e le varie potenze, il progetto al minor costo.<br>
In sostanza, si tratta di definire, per ogni tipo di elemento e per ogni potenza, quali sono i parametri geometrici che vi portano il maggior vantaggio in termini economici.<br>
L’inserimento dei parametri geometrici corrispondenti a questa ottimizzazione, poiché verranno adottati automaticamente dalle applicazioni Clever, vi permetteranno di progettare immediatamente elementi il più possibile ottimizzati.<br>
Per i grandi elementi esistono due tabelle: una per elementi costruiti con il lamierino magnetico a grani non orientati **(NO)** e uno per lamierino magnetico a grani orientati **(GO)**. Questo perché nei due casi il proporzionamento generalmente è differente.
**È possibile inserire altre tabelle, su richiesta, per definire parametri differenti per costruzioni speciali (ad esempio elementi per trazione).** <br>
Tutte le dimensioni riportate nelle tabelle sono in mm. salvo esplicita indicazione.

### Campi della tabella (Lamierino NO e Lamierino GO)
- **Descrizione**: descrizione libera del tipo di elemento. Non viene utilizzata all’interno delle applicazioni e quindi potete scrivere ciò che preferite.
- **Potenza VA**: potenza di dimensionamento dell' elemento in VA.
- **Tratti Avv.Prim**: numero tratti dell’avvolgimento primario (nel caso di induttori sarà il numero dei tratti totale poiché c’è solo un avvolgimento).
- **Canale Avv. Prim**: spessore del canale frontale tra i tratti del primo avvolgimento.
- **Tratti Avv.Sec**: numero tratti dell’avvolgimento secondario.
- **Canale Avv. Sec**: spessore del canale frontale tra i tratti dell’avvolgimento secondario. Questo canale viene utilizzato anche tra il primario e il secondario. Se ci fossero più secondari prenderebbero i dati del primo secondario.
- **H Avv**: Altezza netta degli avvolgimenti (tutti gli avvolgimenti vengono impostati a uguale altezza).
- **Sez. Nucleo cm2**: sezione del nucleo (colonna) che si calcola in questo modo: **Larghezza Lamierino x Spessore Nucleo x 0.97**. <br>
**0.97** permette di ottenere la sezione reale, dedotti gli spazi occupati dall’isolante dei singoli lamierini.
- **Largh. Lam**: la larghezza del lamierino della colonna (Lo spessore del nucleo viene calcolato automaticamente dall’applicazione, partendo dalla sezione del nucleo, tenuto conto della formula sopra riportata).
- **Canale Front. N/B**: canale frontale tra nucleo e avvolgimento.
- **Canale Lat. N/B**: canale Laterale tra nucleo e avvolgimento (l’inserimento dei due valori, frontale e laterale, è interessante 
soprattutto per gli induttori). Se non esiste canale laterale introdurre 0.
- **L Finestra**: larghezza della finestra. Per larghezza finestra s’intende lo spazio tra le colonne.
- **H Finestra**: altezza finestra. Per altezza finestra s’intende lo spazio tra i due gioghi.