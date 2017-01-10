# minkorrekt-visual

Methodisch inkorrekte Auswertung des Methodisch Inkorrekt Podcast.

## Crawler

Soll gegen den Feed laufen: <http://minkorrekt.de/feed/m4a/>

1.  &lt;title>
    1.  Folgennummer
    2.  Folgenname
2.  &lt;pubDate>
    -   Datum
3.  &lt;link>
    -   URL
4.  &lt;itunes:duration>
    -   Abspiellänge
5.  &lt;itunes:subtitle>
    1.  Folgenname
    2.  Sonderfolgen wie:
        -   Nobelpreis
        -   Ig-Nobelpreis
        -   Jahresrückblick
6.  &lt;content:encoded> (&lt;p>)
    1.  Beschreibungstext
    2.  Chinagadget der Woche

### Exclude

1.  Musik
2.  Experimente

## Data

### Was genau?

Vermutlich folgende JSON-Dateien:
1.  Alle Folgen
2.  Sonderfolgen (Nobelpreis, Ig-Nobelpreis und Jahresrückblick)
3.  Chinagadgets
4.  Word Count | NN/NE | Namen | Deskriptoren

### Struktur der JSON-Dateien

1.  Alle Folgen und Sonderfolgen:
    -   Folgennummer
        -   Folgenname
        -   Datum
        -   Abspiellänge
        -   URL
        -   Sonderfolge (Nobelpreis, Ig-Nobelpreis, Jahresrückblick)
        -   Beschreibungstext
2.  Chinagadgets
    -   Folgennummer
        -   Folgenname
        -   Datum
        -   URL
        -   Chinagadget der Woche

## Website

### css

Cascading Stylesheets

### img

Bilder

### lib

-   (Javascript) Bibliotheken
-   <https://github.com/d3/d3>
