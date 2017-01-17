# minkorrekt-visual

Methodisch (in)korrekte Auswertung des Methodisch-Inkorrekt-Podcasts.

# TO DO

## Website

-   Auffälligkeiten beschreiben

    -   Änderung Feed-URL
    -   Fehlende Längen
    -   Inkonsistente Titel

-   Design

    -   Navbar mit Menü auf Mobile anpassen
    -   Navbar-Tabs für alle Sections
        -   Javascript-Datei erstellen
        -   <https://v4-alpha.getbootstrap.com/components/navs/#using-data-attributes>
    -   Loading-Sign in den Tabs
    -   Hover Info auf Datenpunkte

-   Datenvisualisierung

    -   Dynamisch
    -   Getrennt nach Sendung

        -   Normal
        -   Sonderfolge

            -   Aufgeschlüsselt

    -   Tabelle

        -   Sorting Function für pubdate
        -   Sorting Function für pubtime und duration (ideal HH:MM:SS)
        -   Sorting Function für pubday (Wochentage reihen)
        -   Datum ändern

    -   Balkendiagramme
    -   Globale Variablen für wiederkehrende (Design)elemente erstellen
    -   Addierte Sendezeiten
    -   Häufigkeit PubDay (count)
    -   Durchschnittliche PubTime (count und mean)
    -   NN/NE in Cloud oder der Seite
    -   Zuordnen zu Wissenschaftsbereichen

        -   Passende Thesauri?

## Crawler

### Pipeline

-   Episoden 12a und 12b in 12.1 und 12.2 umwandeln
-   Länge der Titel zählen
-   Pubdate neu crawlen, es ist in GMT!!!
-   Datum in int umwandeln
-   datetime aus pubdate und pubtime kreieren
-   Descriptions aufräumen
-   PoS-Tagging

* * *

# Crawler

Soll gegen den Feed laufen: <http://minkorrekt.de/feed/m4a/>

1.  &lt;title>

2.  Folgennummer -> \\d{1} + 0 davor
3.  Folgenname

4.  &lt;pubDate>

5.  Datum

6.  &lt;link>

7.  URL

8.  &lt;itunes:duration>

9.  Abspiellänge

10. &lt;itunes:subtitle>

11. Folgenname
12. Sonderfolgen wie:

    -   Nobelpreis
    -   Ig-Nobelpreis
    -   Jahresrückblick

13. &lt;content:encoded> (&lt;p>)

14. Beschreibungstext
15. Chinagadget der Woche

## Exclude

1.  Musik
2.  Experimente

* * *

# Data

Evtl. erst crawlen und nachfolgend mit Python oder Bash bearbeiten, um Folgennummer|Folgenname bzw. Beschreibung|Chinagadget zu separieren

## Was genau?

Vermutlich folgende JSON-Dateien:

1.  Alle Folgen -> complete.json
2.  Sonderfolgen (Nobelpreis, Ig-Nobelpreis und Jahresrückblick) -> specials.json
3.  Chinagadgets -> chinagadgets.json
4.  Word Count | NN/NE | Namen | Deskriptoren -> nlp.json

## Inhalt der JSON-Dateien

### complete.json

-   pubtime_original
-   pubdate
-   pubday
-   url
-   number
-   duration_original
-   specials
-   pubtime
-   duration
-   titlemain

### specials.json

### chinagadgets.json

### nlp.json

* * *

# Website

## css

Cascading Stylesheets

## img

Bilder

## lib

(Javascript) Bibliotheken

-   Von woanders:
    -   Bootstrap Table
    -   bootstrap-table-toolbar.js
    -   bootstrap-table-mobile.js
    -   Highchart
-   Meine:
    -   scrolling.js
    -   sizing.js
    -   bootstraptabletest.js
