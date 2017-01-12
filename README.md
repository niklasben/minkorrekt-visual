# minkorrekt-visual

Methodisch inkorrekte Auswertung des Methodisch Inkorrekt Podcast.

# TO DO
## Website
-   Auffälligkeiten beschreiben
    -   Änderung Feed-URL
    -   Fehlende Längen
    -   Inkonsistente Titel
-   Design
-   Datenvisualisierung
    -   Dynamisch
    -   Getrennt nach Sendung
        -   Normal
        -   Sonderfolge
            -   Aufgeschlüsselt
    -   Tabelle
    -   Balkendiagramme
    -   Addierte Sendezeiten
    -   Häufigkeit PubDay
    -   Durchschnittliche PubTime
    -   NN/NE in Cloud oder der Seite
    -   Zuordnen zu Wissenschaftsbereichen
        -   Passende Thesauri?
    
## Crawler
### Pipeline
-   Descriptions aufräumen
-   PoS-Tagging

---

## Crawler

Soll gegen den Feed laufen: <http://minkorrekt.de/feed/m4a/>

1.  &lt;title>
    1.  Folgennummer -> \d{1} + 0 davor
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

Evtl. erst crawlen und nachfolgend mit Python oder Bash bearbeiten, um Folgennummer|Folgenname bzw. Beschreibung|Chinagadget zu separieren

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
