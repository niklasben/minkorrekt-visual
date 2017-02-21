# minkorrekt-visual

Methodisch (in)korrekte Auswertung des Methodisch-Inkorrekt-Podcasts.

# TO DO

## Website

-   Auffälligkeiten beschreiben

    -   Änderung Feed-URL

-   Design

    -   Für alles nochmal auf Mobile prüfen
        -   Nutzung der Bootstrap col classes
            -   Auch bei den Grafiken prüfen
    -   Navbar mit Menü auf Mobile anpassen
    -   Navbar-Tabs für alle Sections
        -   Javascript-Datei erstellen
        -   <https://v4-alpha.getbootstrap.com/components/navs/#using-data-attributes>
    -   Loading-Sign in den Tabs
        -   Laden erst beim Drüberscrollen
    -   Scrolling nur bei den Sidebar-Links, nicht bei den Nav-Tabs
    -   Breite der Grafik-Tabs = .content
        -   Responsive Hack: <https://plot.ly/javascript/responsive-fluid-layout/>
    -   Links im Jumbotron mit underline
    -   Breite evaluieren (Probleme Notebook)
        -   sizing.js?
    -   


-   Datenvisualisierung

    -   Dynamisch
    -   Getrennt nach Sendung
        -   Normal
        -   Sonderfolge
            -   Aufgeschlüsselt
    -   Tabelle

        -   Sorting Function für pubday (Wochentage reihen)
        -   Datum ändern

    -   Hover Info auf Datenpunkte
    -   Balkendiagramme
    -   Globale Variablen für wiederkehrende (Design)elemente erstellen
    -   Addierte Sendezeiten
    -   Häufigkeit PubDay (count)
    -   Durchschnittliche PubTime (count und mean)
    -   NN/NE in Cloud oder der Seite
    -   Zuordnen zu Wissenschaftsbereichen
        -   Passende Thesauri?
    -   Länge der Titel zählen
    -   Hover Texte für Monat/Jahr
    -   Bar Chart für das Jahr mit stacked Monaten
        -   Zusätzliches Array mit 0 Werten oder andere auf NULL
            -   Ggf. dann mit if bei Funktion raus filtern
    -   Pie Chart offen
    -   Heatmap
    -   Plot Line für alle Monate
    -   Monatsnamen mit deutschen Abkürzungen
    -   arrayDurationIntegerMin -> arrayDurationIntegerMinutes
    -   Funktionsnamen den neu benannten Tabs zuordnen = Renaming
    -   Bar Chart so anpassen, dass 12a und 12b raus sind
        -   If mit is != ?


-   Javascript-Dateien

    -   Header mit Autorenangaben
    -   minified Version?
    -   Was hat Tether gemacht?
    -   resize function bei plotly reparieren
        -   Höhe der Tabs abziehen
        -   Kein margin

        -   Github-Tracker | Grafik overfull
        -   Höhe passt nicht! Deshalb
            -   If auf @media anpassen bezüglich
                -   padding
                -   menü oben (xs und sm)
                -   Viewpoint dann auf section top springen lassen

    -   Erst bei Bedarf Laden

        -   Github
        -   Visualisierungen
        -   Tabelle

    -   Ggf. nur eine große JS-Datei?

-   Github Issue Tracker
    -   Die einzelnen Fälle müssen nochmal sauber mit .append in JS dargestellt werden
    -   I empty height != window.height()

## Crawler

### Pipeline

-   datetime aus pubtime kreieren
-   Descriptions aufräumen
-   PoS-Tagging
-   Prüfen ob Zeitangaben in UTC und passend mit MESZ

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
1\.  Alle Folgen -> complete.json
2\.  Sonderfolgen (Nobelpreis, Ig-Nobelpreis und Jahresrückblick) -> specials.json
3\.  Chinagadgets -> chinagadgets.json
4\.  Word Count | NN/NE | Namen | Deskriptoren -> nlp.json

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
-   Meine:
        \-   scrolling.js
        \-   sizing.js
        \-   bootstraptabletest.js
    .js
