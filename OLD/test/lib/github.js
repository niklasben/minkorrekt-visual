$(function() {
    // URL for bugs
    var urlToGetAllOpenBugs = "https://api.github.com/repos/jquery/jquery/issues?state=open&labels=bug";

    // URL for enhancements
    var urlToGetAllOpenEnhancements = "https://api.github.com/repos/jquery/jquery/issues?state=open&labels=enhancement";

    // URL for questions
    var urlToGetAllOpenQuestions = "https: //api.github.com/repos/jquery/jquery/issues?state=open&labels=question";

    // Apply and style fetched bugs
    $.getJSON(urlToGetAllOpenBugs, function(allIssues) {
        $(".bugs").append("found " + allIssues.length + " issues</br>");
        $.each(allIssues, function(i, issue) {
            $(".bugs")
                .append("<b>" + issue.number + " - " + issue.title + "</b></br>")
                .append("created at: " + issue.created_at + "</br>")
                .append(issue.body + "</br></br></br>");
        });
    });

    // Apply and style fetched enhancements
    $.getJSON(urlToGetAllOpenEnhancements, function(allIssues) {
        $(".enhancements").append("found " + allIssues.length + " issues</br>");
        $.each(allIssues, function(i, issue) {
            $(".enhancements")
                .append("<b>" + issue.number + " - " + issue.title + "</b></br>")
                .append("created at: " + issue.created_at + "</br>")
                .append(issue.body + "</br></br></br>");
        });
    });

    // Apply and style fetched questions
    $.getJSON(urlToGetAllOpenQuestions, function(allIssues) {
        $(".questions").append("found " + allIssues.length + " issues</br>");
        $.each(allIssues, function(i, issue) {
            $(".questions")
                .append("<b>" + issue.number + " - " + issue.title + "</b></br>")
                .append("created at: " + issue.created_at + "</br>")
                .append(issue.body + "</br></br></br>");
        });
    });
});
