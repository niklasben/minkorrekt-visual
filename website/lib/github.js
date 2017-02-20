$(function() {
    /* var urlToGetAllOpenBugs = "https://api.github.com/repos/niklasben/minkorrekt-visual/issues?state=open&labels=bug";
    TEST CASE */
    var urlToGetAllOpenBugs = "https://api.github.com/repos/jquery/jquery/issues?state=open&labels=bug";

    var urlToGetAllOpenEnhancements = "https://api.github.com/repos/niklasben/minkorrekt-visual/issues?state=open&labels=enhancement";

    var urlToGetAllOpenQuestions = "https://api.github.com/repos/niklasben/minkorrekt-visual/issues?state=open&labels=question";

    $.getJSON(urlToGetAllOpenBugs, function(allBugs) {
        $(".bugs")
            .append("<p class=\"text-center bugs-color\">Es wurden <strong>" + allBugs.length + "</strong> offene Bugs gefunden</p>");
        $.each(allBugs, function(i, bug) {

            // Hier muss man nochmal bei
            $(".bugs")
                .append("<p class=\"text-justify\">")
                .append("<b>" + bug.number + " - " + bug.title + "</b></br>")
                .append("created at: " + bug.created_at + "</br>")
                .append(bug.body + "</br></br></br>")
                .append("</p>");
        });
    });

    $.getJSON(urlToGetAllOpenEnhancements, function(allEnhancements) {
        $(".enhancements").append("<p class=\"text-center enhancements-color\">Es wurden <strong>" + allEnhancements.length + "</strong> offene Erweiterungswünsche gefunden</p>");
        $.each(allEnhancements, function(i, enhancement) {
            $(".enhancements")
                .append("<b>" + enhancement.number + " - " + enhancement.title + "</b></br>")
                .append("created at: " + enhancement.created_at + "</br>")
                .append(enhancement.body + "</br></br></br>");
        });
    });

    $.getJSON(urlToGetAllOpenQuestions, function(allQuestions) {
        $(".questions").append("<p class=\"text-center questions-color\">Es wurden <strong>" + allQuestions.length + " </strong> offene Fragen gefunden</p>");
        $.each(allQuestions, function(i, question) {
            $(".questions")
                .append("<b>" + question.number + " - " + question.title + "</b></br>")
                .append("created at: " + question.created_at + "</br>")
                .append(question.body + "</br></br></br>");
        });
    });
    console.log(urlToGetAllOpenBugs);
});
