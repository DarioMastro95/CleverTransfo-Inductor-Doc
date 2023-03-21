# Costo unitario materiali
## Introduzione:
Questa tabella viene utilizzata dalle applicazioni per determinare la descrizione e il costo unitario dei materiali che comporranno la distinta base.<br>
La prima volta che la visionate, trovate già una serie di **materiali “generici”** e avete inoltre la possibilità (come vedremo più aventi) di importare tutte le informazioni relative a tutti i vostri **articoli specifici**, presenti nel vostro **sistema gestionale**. <br>
Infatti le applicazioni utilizzano la lista dei materiali generici quando non trovano il materiale specifico, allo scopo di poter sempre determinare il costo unitario e la descrizione del componente che stanno in quel momento progettando.
Notate che, nella tabella, i materiali generici hanno un numero d’articolo che inizia con la lettera **Z** e sono contraddistinti dal colore blu.
La lista dei materiali generici comprende tutte le famiglie dei materiali che vengono utilizzati dalle applicazioni. Ovviamente, dal punto di vista dimensionale contengono costi unitari associati a range di dimensioni con limiti piuttosto grossolani, perché altrimenti la lista sarebbe molto lunga e difficile da tenere aggiornata. D’altro canto, lo scopo, come si diceva, è quello di permettere alle applicazioni di calcolare il costo dei materiali di un elemento in modo sufficientemente preciso, anche se si tratta di un elemento speciale che utilizza materiali che non fanno parte del magazzino articoli dell’azienda. 

Quindi:
1. Il vostro primo lavoro sarà quindi quello di **inserire il costo unitario per ogni riga**, conformemente all’unità di misura indicata. 
2. Il vostro secondo compito consisterà nell'importare l'elenco dei materiali disponibili nel vostro magazzino ed elencati nel vostro sistema di gestione.


### Particolarità relative ai conduttori:
Il costo dei conduttori può essere diviso in costo base e costo trasformazione. Infatti, troverete nella tabella queste due voci:
- **Conduttore base AL**
- **Conduttore base CU**

Troverete inoltre, per ciascun tipo di conduttore, un’altra voce :
***Esempio:<br>
Conduttore Filo AL <= 2.5<br>
Oppure <br>
Conduttore Nastro CU***<br>
Dove potete inserire il costo cosiddetto di **trasformazione.**
Se inserite un costo di **base** le applicazioni lo prenderanno come costo base del conduttore e, nel calcolo del costo materiali lo sommeranno al costo di **trasformazione.** Se non volete spezzare il costo dei conduttori in 
**Base + trasformazione**, vi basterà inserire 0 come base per entrambi i materiali.

### Campi della tabella (costo materiali):

- **Descrizione**: è la descrizione assegnata a quel materiale (campo in sola lettura)
- **Unità di misura**: è l’unità di misura di riferimento per il valore del costo unitario. (campo in sola lettura)
- **Costo unitario**: qui inserire il costo unitario conformemente all’unità di misura
- **Articolo**: articolo assegnato (campo in sola lettura)<br>

Eventuali aggiunte di materiali generici sono conseguenti alla personalizzazione delle applicazioni, non possono essere aggiunti dall’utente.

### Modalità di gestione della tabella:

Oltre all’inserimento dei costi generici, come si diceva, è possibile importare l’intera lista dei materiali presenti nel vostro sistema gestionale. Ecco come procedere:

#### Gestione della prima esportazione dei dati dei materiali lato sistema gestionale:

Estrarre un file che salverete con estensione **.csv** (leggibile con Excel) con le seguenti caratteristiche:
- Colonna 1 = ARTICOLO
- Colonna 2 = DESCRIZIONE
- Colonna 3 = UNITÀ DI MISURA
- Colonna 4 = Costo

Il carattere di separazione tra le colonne deve essere **“;”**

Potete chiedere ai vostri tecnici informatici, che si occupano del sistema gestionale, di fare questo e salvarlo in una cartella a voi accessibile.
È possibile estrarre l'intero elenco dei materiali (non solo quelli utilizzati nei progetti) in quanto le applicazioni utilizzeranno solo gli articoli presenti nelle tabelle tecniche dei materiali.
Ovviamente nell’organizzazione iniziale di questo lavoro, occorre decidere quale colonna prezzo utilizzare per esportazione (Prezzo medio, ultimo prezzo ecc.). Questa è una vostra decisione.

#### Importazione nelle applicazioni Clever dati dei materiali:

- Premere il bottone “Import” che si trova in alto a destra in questa tabella
- Scegliere dalla finestra di dialogo che apparirà il file esportato dal sistema gestionale**
- Sempre dalla finestra di dialogo aperta fare click su Open (in basso a destra)**
- In questo modo il file verrà automaticamente importato.**

Potete definire all’interno del vostro dipartimento tecnico, una procedura che indica il momento specifico durante il quale importare il file dei costi aggiornati (ogni mattina oppure ogni lunedì mattina o altro).

#### Gestione delle importazioni periodiche dei dati dei materiali:
Per l’aggiornamento periodico del costo dei materiali generici, è possibile procedere in due modi:
- Il dipartimento tecnico si prende carico di aggiornare il costo direttamente in questa tabella, come è stato fatto la prima volta. In questo caso dal sistema gestionale vengono importati solo gli articoli specifici.

- Si caricano nel sistema gestionale anche i materiali generici, che dovranno essere gestiti come **articoli virtuali** (senza ubicazione fisica e a quantità = 0). In questo l’aggiornamento dei costi dei materiali generici sarà a carico del dipartimento gestionale e il file d’importazione dei materiali comprenderà anche i generici.

Qualsiasi sia la scelta, è auspicabile creare una **procedura** lato gestionale, che faccia questa esportazione automaticamente, in una cartella definita e leggibile dal dipartimento tecnico, ad esempio ogni settimana o addirittura ogni giorno. In questo modo ci sono le giuste premesse perché dal lato tecnico si possano importare i costi aggiornati, in qualsiasi momento con la sicurezza di importare costi aggiornati.


#### Facilitazioni di lettura della tabella:
- Come in ogni altra tabella potete utilizzare il **filtro** in alto a sinistra per la ricerca di famiglia di materiali o di un materiale specifico, oppure modificare l’ordinamento delle colonne.
- Se il costo dei materiali è = 0 viene contraddistinto dal colore **rosso**.
- Se nelle tabelle specifiche che avete compilato in precedenza vedete un articolo colorato in **rosso** significa che nella tabella “costo unitario materiali” non esiste l’articolo corrispondente.


